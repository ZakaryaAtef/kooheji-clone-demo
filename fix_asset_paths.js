const fs = require('fs');
const glob = require('glob'); // Assume we can use glob or just write a simple recursive function if glob isn't installed. Wait, earlier Node scripts used glob without issue. Wait, earlier scripts used fs.readdirSync. Let's write a safe recursive function just in case.
const path = require('path');

function walkSync(dir, filelist) {
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + '/' + file, filelist);
        }
        else {
            if (file.endsWith('.html')) {
                filelist.push(dir + '/' + file);
            }
        }
    });
    return filelist;
}

const htmlFiles = walkSync(__dirname, []);
let changedCount = 0;

for (let file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace href="../../assets/..." with href="/assets/..."
    content = content.replace(/href="(?:\.\.\/)+assets\//g, 'href="/assets/');
    // Replace src="../../assets/..." with src="/assets/..."
    content = content.replace(/src="(?:\.\.\/)+assets\//g, 'src="/assets/');

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedCount++;
    }
}

console.log(`Successfully updated absolute asset paths in ${changedCount} HTML files!`);

// And safely wipe out the duplicated ar/assets folder
const arAssets = path.join(__dirname, 'ar', 'assets');
if (fs.existsSync(arAssets)) {
    fs.rmSync(arAssets, { recursive: true, force: true });
    console.log("Deleted orphaned ar/assets redundant directory.");
}
