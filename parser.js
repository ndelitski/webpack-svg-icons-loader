module.exports = function parseSVGfile(options) {
    var re = new RegExp(/^<glyph.*glyph-name="([^\"]+)".*d="([^\"]+)"/),
        contents;

    if (options.path) {
        contents = require('fs').readFileSync(options.path, 'utf-8');
    } else if (options.contents) {
        contents = options.contents;
    }

    return contents.split(/\n/).map(function (l) {
        var match = l.match(re);
        if (match) {
            return {
                name: match[1],
                data: match[2]
            }
        }
    }).filter(function (l) {
        return l;
    });
};