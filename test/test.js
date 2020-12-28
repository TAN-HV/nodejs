var assert = require("assert");
var db = require("./jwHelper");
describe("jwt", function () {
  describe("#generateToken", function () {
    it("should return -1 when the value is not present", function () {
      console.log(__dirname);
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
