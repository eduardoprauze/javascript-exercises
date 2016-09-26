var _ = require('underscore');

module.exports = function (fn, timeout) {
  var debounced_fn = _.debounce(fn, timeout);
  return debounced_fn
}
