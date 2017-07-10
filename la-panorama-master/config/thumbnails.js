var thumb = require('node-thumbnail').thumb;

module.exports = function ({source, destination}) {
    console.log('Thumbnails check...')
    thumb({
        source: source,
        destination: destination,
        concurrency: 4
    }, function (files, err, stdout, stderr) {
        if (err)
            console.error(err)
        else
            console.log('All thumbnails created!');
    });
}