const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const repoUrl = 'https://github.com/IceBlcokMC/Js_Engine.git';
const tempDir = path.join(__dirname, '..', 'temp');
const libDir = path.join(__dirname, '..', 'lib');

exec(`git clone --depth=1 ${repoUrl} ${tempDir}`, (err) => {
    if (err) {
        console.error('Failed to clone repository:', err);
        process.exit(1);
    }

    fs.copy(path.join(tempDir, 'lib'), libDir, (err) => {
        if (err) {
            console.error('Failed to copy lib folder:', err);
            process.exit(1);
        }

        fs.remove(tempDir, (err) => {
            if (err) {
                console.error('Failed to remove temp directory:', err);
                process.exit(1);
            }

            console.log('Successfully installed lib types.');
        });
    });
});