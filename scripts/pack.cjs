const fs = require("fs");
const path = require("path");

const outputDir = path.resolve(__dirname, "../dist");
const projectDir = path.resolve(__dirname, "../");

{
  // Copy package.json
  const hasKey = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const packageJson = require(path.resolve(projectDir, "package.json"));

  if (hasKey(packageJson, "scripts")) {
    for (const key in packageJson.scripts) {
      if (key.startsWith("post")) {
        delete packageJson.scripts[key];
      }
    }
  }

  if (!hasKey(packageJson, "main")) {
    throw new Error("package.json does not have a main field");
  }

  fs.writeFileSync(path.resolve(outputDir, "package.json"), JSON.stringify(packageJson, null, 2));
}

const files = ["README.md", "LICENSE", "CHANGELOG.md"];

for (const file of files) {
  if (fs.existsSync(path.resolve(projectDir, file))) {
    fs.copyFileSync(path.resolve(projectDir, file), path.resolve(outputDir, file));
  }
}

console.info("Packaged plugin.");
