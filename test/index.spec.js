
const index = require('../index');
const chai = require('chai');

let expect = chai.expect;
describe('index.js tests', function () {
  it('addTwoNumbers returns a number', function () {
    expect(index.addTwoNumbers(0, 0)).to.be.a('number');
  })
  it('addTwoNumbers can add 1 + 2', function () {
    expect(index.addTwoNumbers(1, 2)).to.equal(3);
  });
});

// “Red, Green, Refactor”. The idea is that you write a test that fails. Then fix your code to pass the test. Finally you can refactor your code with the peace of mind that you’ve got a test to check that your refactor doesn’t break everything.

