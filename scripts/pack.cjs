const fs = require("fs");
const path = require("path");

const outputDir = path.resolve(__dirname, "../dist");
const projectDir = path.resolve(__dirname, "../");

// Copy package.json
fs.copyFileSync(path.resolve(projectDir, "package.json"), path.resolve(outputDir, "package.json"));
// Remove scripts's postinstall
const packageJson = require(path.resolve(outputDir, "package.json"));
delete packageJson.scripts; // Remove scripts
fs.writeFileSync(path.resolve(outputDir, "package.json"), JSON.stringify(packageJson, null, 2));

// Copy README.md
fs.copyFileSync(path.resolve(projectDir, "README.md"), path.resolve(outputDir, "README.md"));

// Copy LICENSE
if (fs.existsSync(path.resolve(projectDir, "LICENSE"))) {
    fs.copyFileSync(path.resolve(projectDir, "LICENSE"), path.resolve(outputDir, "LICENSE"));
}

// Copy CHANGELOG.md
if (fs.existsSync(path.resolve(projectDir, "CHANGELOG.md"))) {
    fs.copyFileSync(path.resolve(projectDir, "CHANGELOG.md"), path.resolve(outputDir, "CHANGELOG.md"));
}
