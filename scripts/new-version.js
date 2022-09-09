/* eslint-disable @typescript-eslint/prefer-optional-chain */
const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const { exec: execCommand } = require('child_process');

const exec = (command) => {
    return new Promise((resolve, reject) => {
        execCommand(command, (error, stdout) => {
            if (error) {
                reject(error);
            }
            resolve(stdout);
        });
    });
};

async function newVersion() {
    try {
        const { data } = await axios.get('https://registry.npmjs.org/@agros/app', {
            responseType: 'json',
        });

        const versions = Object.keys((data || {}).versions || {});

        if (versions.length === 0) {
            return;
        }

        const [
            majorVersion,
            minorVersion,
        ] = versions.pop().split('.');
        const docsVersion = `${majorVersion}.${minorVersion}.x`;

        if (!fs.existsSync(path.resolve(__dirname, `../versioned_docs/version-${docsVersion}`))) {
            console.log('Cannot find version ' + docsVersion + ' in current docs, generating...');
            await exec('npm run docusaurus docs:version ' + docsVersion);
            console.log('Generate finished, adding to git...');
            await exec('git add -A');
            await exec('git commit -m \'Create new version of \'' + docsVersion);
            await exec('git push origin master');
            console.log('Push finished');
        } else {
            console.log('There is already a versioned doc ' + docsVersion + ', doing nothing...');
        }
    } catch (e) {
        console.log('Check failed' + e);
    }
}

newVersion().then((res) => {});
