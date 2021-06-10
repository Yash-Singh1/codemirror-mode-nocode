(function (mod) {
  /* istanbul ignore next */
  if (typeof exports == 'object' && typeof module == 'object')
    // CommonJS
    mod(require('codemirror'));
  else if (typeof define == 'function' && define.amd)
    // AMD
    define(['codemirror'], mod);
  // Plain browser env
  else mod(CodeMirror);
})(function (CodeMirror) {
  CodeMirror.defineMode('nocode', () => {
    return {
      token(stream) {
        stream.skipToEnd();
        return 'error';
      },
    };
  });
});
