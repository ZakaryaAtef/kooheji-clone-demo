const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist) {
    let files;
    try {
        files = fs.readdirSync(dir);
    } catch (e) {
        return filelist || [];
    }

    filelist = filelist || [];
    files.forEach(function (file) {
        if (file === 'node_modules' || file === '.git') return;

        let filePath = path.join(dir, file);
        let stat;
        try {
            stat = fs.statSync(filePath);
        } catch (e) {
            return;
        }

        if (stat.isDirectory()) {
            filelist = walkSync(filePath, filelist);
        }
        else {
            if (file.endsWith('.html')) {
                filelist.push(filePath);
            }
        }
    });
    return filelist;
}

const htmlFiles = walkSync(path.join(__dirname, 'ar'), []);
let changedCount = 0;

for (let file of htmlFiles) {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let original = content;

        // Target specifically the exact image references we know broke on mobile
        content = content.replace(/src="(?:\/ar)?\/assets\/img\/logo\.png"/g, 'src="/assets/img/logo.png"');
        content = content.replace(/src="http:\/\/localhost:3000\/ar\/assets\/img\/logo\.png"/g, 'src="/assets/img/logo.png"');

        if (content !== original) {
            fs.writeFileSync(file, content);
            changedCount++;
        }
    } catch (e) {
        console.log("Could not process file: " + file);
    }
}

console.log(`Successfully fixed mobile logo absolute paths in ${changedCount} HTML files!`);
