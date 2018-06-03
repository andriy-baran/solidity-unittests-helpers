// Returns the time of the last mined block in seconds
exports.latestTime = function () {
    return web3.eth.getBlock('latest').timestamp;
}