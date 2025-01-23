const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const repoUrl = 'https://github.com/IceBlcokMC/Js_Engine.git';
const tempDir = path.join(__dirname, '..', 'temp');
const typesDir = path.join(__dirname, '..', 'types');

exec(`git clone --depth=1 ${repoUrl} ${tempDir}`, (err) => {
    if (err) {
        console.error('Failed to clone repository:', err);
        process.exit(1);
    }

    fs.copy(path.join(tempDir, 'types'), typesDir, (err) => {
        if (err) {
            console.error('Failed to copy types folder:', err);
            process.exit(1);
        }

        fs.remove(tempDir, (err) => {
            if (err) {
                console.error('Failed to remove temp directory:', err);
                process.exit(1);
            }

            console.log('Successfully installed Js_Engine types.');
        });
    });
});