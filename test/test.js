var notesapp = require('../').notesapp;
var chai = require('chai');
var assert = chai.assert;

describe("NotesApp", function() {
    describe("constructor",function(){
        it("should create a new notes app instance", function() {
            assert.typeOf(notesapp,"function");
        });
    });
})

