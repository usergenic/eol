/*!
 * eol 0.2.0+201403200220
 * https://github.com/ryanve/eol
 * MIT License, 2014 Ryan Van Etten
 */
!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make();
  else root[name] = make();
}(this, 'eol', function() {
  function converts(to) {
    return function(text) {
      return text.replace(newline, to);
    };
  }
  var api = {}, newline = /\r\n|\r|\n/g;
  api['lf'] = converts('\n');
  api['cr'] = converts('\r');
  api['crlf'] = converts('\r\n');
  api['auto'] = converts(
    typeof process != 'undefined' && 'win32' === process.platform ? '\r\n' : '\n'
  );
  return api;
});
