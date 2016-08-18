var notesapp =require('../');
var notes = new notesapp();
var chai = require('chai');
var assert = chai.assert;

describe("NotesApp", function() {
    describe("constructor",function(){
        it("should create a new notes app instance", function() {
            assert.typeOf(notes,"object");
        });
    }); 

    describe("addNote",function(){
        it("should add a new note",function(){
            var intialsize = notes.notes.length;
            notes.addNote("a note");
            var newsize = notes.notes.length;
            assert.operator(newsize, '>', intialsize);
        })
    })
})

