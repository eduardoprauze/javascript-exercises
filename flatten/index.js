var _ = require('underscore');

module.exports = function (data) {
  var flat = _.flatten(data)
  return flat
}
