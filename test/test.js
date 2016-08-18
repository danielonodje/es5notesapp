var notesapp =require('../');
var chai = require('chai');
var assert = chai.assert;

describe("NotesApp", function() {
    describe("constructor",function(){
        it("should create a new notes app instance", function() {
            var notes = new notesapp();
            assert.typeOf(notes,"object");
        });
    }); 

    describe("addNote",function(){
        it("should add a new note",function(){
            var notes = new notesapp();
            var intialsize = notes.notes.length;
            notes.addNote("a note");
            var newsize = notes.notes.length;
            assert.operator(newsize, '>', intialsize);
        })
    });

    describe("editNote",function(){
        it("should edit an existing note",function(){
            notes = new notesapp();
            notes.addNote("a note");
            notes.editNote(0,"check note");
            assert.equal(notes.notes[0],"check note");
        })
    });

    describe("listNotes",function(){
        it("should list all existing notes",function(){
            notes = new notesapp();
            notes.addNote("a note");
            notes.addNote("another note");
            notesarray = notes.listNotes();
            assert.lengthOf(notesarray,2);
            assert.equal(notesarray[0],"a note");
            assert.equal(notesarray[1],"another note");            
        })
    });

    describe("getNote",function(){
        it("should return the requested note",function(){
            notes = new notesapp();
            notes.addNote("a note");
            var note = notes.getNote(0);
            assert.typeOf(note,'string');
            assert.equal(note,'a note');
        })
    })
})

