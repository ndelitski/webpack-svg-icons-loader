
var path = require('path'),
	parse = require('../parser'),
	chai = require('chai'),
	expect = chai.expect,
	assert = chai.assert,
	SVG_FONT = require('fs').readFileSync(path.join(__dirname, 'syncloud.svg'), 'utf-8');

describe('svg-icon-loader', function() {
	it('parser', function() {
		var glyphs = parse(SVG_FONT);
		expect(glyphs).to.have.length.of.at.least(1);
		assert.doesNotThrow(function () {
			glyphs.forEach(function (g) {
				if (!g.name || !g.data) {
					throw new Error('missed fields');
				}
			})
		}, 'all items should have name and data props');
	});

	it('should handle empty file', function(done) {

	});
});