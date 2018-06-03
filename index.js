let asserts = require('./lib/asserts');
exports.asserts = asserts;

let revert = require('./lib/reverter').revert;
exports.revert = revert;

let snapshot = require('./lib/reverter').snapshot;
exports.snapshot = snapshot;

let increaseTimeWith = require('./lib/increaseTime').increaseTimeWith;
exports.increaseTimeWith = increaseTimeWith;

let increaseTimeTo = require('./lib/increaseTime').increaseTimeTo;
exports.increaseTimeTo = increaseTimeTo;

let duration = require('./lib/increaseTime').duration;
exports.duration = duration;
