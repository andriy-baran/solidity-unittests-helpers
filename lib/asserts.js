module.exports = assert => ({
  equal: expected => {
    return actual => {
      assert.equal(actual.valueOf(), expected.valueOf());
      return true;
    };
  },
  isTrue: assert.isTrue,
  isFalse: assert.isFalse,

  throws: promise => {
    return promise.then(assert.fail, () => true);
  },

  doesNotThrow: promise => {
    return promise.then(() => true, assert.fail);
  },
});