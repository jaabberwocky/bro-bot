/* eslint-disable no-undef */
var assert = require("assert");
const utils = require("../src/utils.js");

describe("isCool", function () {
  describe("isCool()", function () {
    it("should return false without cool words", function () {
      assert.strictEqual(utils.isCool("hello world"), false);
    });

    it("should return true with presence of 'dude'", function () {
      assert.strictEqual(utils.isCool("hello dude"), true);
    });

    it("should return true with presence of 'mate'", function () {
      assert.strictEqual(utils.isCool("hello mate"), true);
    });

    it("should return true with presence of 'bro'", function () {
      assert.strictEqual(utils.isCool("hello bro"), true);
    });
  });
});

describe("getRandomReply", function () {
  describe("getRandomReply()", function () {
    it("should return non-zero string", function () {
      assert.strictEqual(utils.getRandomReply().length > 0, true);
    });

    it("should return string", function () {
      assert.strictEqual(typeof utils.getRandomReply(), "string");
    });
  });
});
