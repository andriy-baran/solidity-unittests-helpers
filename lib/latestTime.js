var Web3 = require('web3');

var web3 = new Web3('ws://localhost:8546');

// Returns the time of the last mined block in seconds
exports.latestTime = function () {
    return web3.eth.getBlock('latest').timestamp;
}
