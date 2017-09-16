import * as mocha from 'mocha'
//mocha has no default module to export so it will cause compile error ,
//to overcome the issue * as used 
import * as  chai from 'chai'
import {expect} from 'chai'


describe('Expect style testing',()=>{
    it('Type Checking must return valid values',()=>{
        var foo='Foo';
        expect(foo).to.be.a('string');
    });
});