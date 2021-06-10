const cm = require('codemirror/addon/runmode/runmode.node.js');
require('../index.js');
var test = require('tape');

function getResults(input) {
  var html = '';
  const outf = function (token, tokenClass) {
    html = html + '<span class="cm-' + tokenClass + '">' + token + '</span>';
  };
  cm.runMode(input, 'nocode', outf);
  return html;
}

test('blank gives no error', function (t) {
  t.equal(getResults(''), '');
  t.end();
});

test('having something gives an error', function (t) {
  t.equal(getResults('abcdefg'), '<span class="cm-error">abcdefg</span>');
  t.equal(
    getResults("some random stuff that obviously shouldn't be in nocode\nand this stuff"),
    '<span class="cm-error">some random stuff that obviously shouldn\'t be in nocode</span><span class="cm-undefined">\n</span><span class="cm-error">and this stuff</span>'
  );
  t.end();
});
