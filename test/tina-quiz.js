var mocha  = require('mocha');
var expect = require('chai').expect;

describe("My project", function () {
  it("should know its version", function () {
    var myProject = require('../index');
    expect(myProject.version).to.not.equal(undefined);
    expect(myProject.version).to.equal('0.0.0');
  });
});