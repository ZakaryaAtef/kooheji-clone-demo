import os
import re

OLD_SCRIPT = """    <script>
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
    </script>"""

NEW_SCRIPT = """    <script>
      $(document).ready(function () {
        $(".banneriframe").hide();
        $(".slider_slides.video_slides").removeClass("video_slides");
      });
    </script>"""

base = r"d:\Pro\KC\KC_NewWebsite\projects"
count = 0

for root, dirs, files in os.walk(base):
    for fname in files:
        if not fname.endswith(".html"):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        if OLD_SCRIPT in content:
            new_content = content.replace(OLD_SCRIPT, NEW_SCRIPT)
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            count += 1
            print(f"Fixed: {fpath}")

print(f"\nTotal files fixed: {count}")
