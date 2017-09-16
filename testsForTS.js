"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
describe('Expect style testing', function () {
    it('Type Checking must return valid values', function () {
        var foo = 'Foo';
        chai_1.expect(foo).to.be.a('string');
    });
});
