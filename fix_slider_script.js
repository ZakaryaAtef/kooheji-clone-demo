const fs = require('fs');
const path = require('path');

const OLD_SCRIPT = `    <script>
      var page = window.location.pathname;
      var banneriframe = document.getElementsByClassName("banneriframe");
      var videoslides = document.getElementsByClassName("video_slides");
      if (page == "../index.html") {
        // -- do stuff
        console.log("home page");
      } else {
        // -- do other stuff
        console.log("other page");
        // removing the video
        document.querySelectorAll(".banneriframe").forEach(function (el) {
          el.style.display = "none";
        });
        // removing the video_slides class
        var elems = document.querySelectorAll(".slider_slides.video_slides");
        [].forEach.call(elems, function (el) {
          el.classList.remove("video_slides");
        });
      }
    </script>`;

const NEW_SCRIPT = `    <script>
      $(document).ready(function () {
        $(".banneriframe").hide();
        $(".slider_slides.video_slides").removeClass("video_slides");
      });
    </script>`;

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath, callback);
        } else if (f.endsWith('.html')) {
            callback(fullPath);
        }
    });
}

let count = 0;
const base = path.join(__dirname, 'projects');

walkDir(base, (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('var page = window.location.pathname;')) {
        const newContent = content.replace(OLD_SCRIPT, NEW_SCRIPT);
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Fixed: ' + filePath);
            count++;
        }
    }
});

console.log('\nTotal files fixed: ' + count);
