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
            var notes = new notesapp();
            notes.addNote("a note");
            notes.editNote(0,"check note");
            assert.equal(notes.notes[0],"check note");
        })
    });

    describe("listNotes",function(){
        it("should list all existing notes",function(){
            var notes = new notesapp();
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
            var notes = new notesapp();
            notes.addNote("a note");
            var note = notes.getNote(0);
            assert.typeOf(note,'string');
            assert.equal(note,'a note');
        });
    });

    describe("deleteNote",function(){
        it("should delete an existing note",function(){
            var notes = new notesapp();
            notes.addNote("a note");
            notes.addNote("a note");
            var beforesize = notes.notes.length;
            notes.deleteNote(0);
            var aftersize = notes.notes.length;
            assert.operator(aftersize,"<", beforesize);
        });
    });

    describe("searchnote",function(){
        it("should search for a note containing a given string and return it",function(){
            var notes = new notesapp;
            notes.addNote("a note");
            notes.addNote("another note");
            notes.addNote("a third note");
            notes.addNote("a fourth note");
            var foundnotes = notes.searchNote("third");
            assert.isArray(foundnotes);
            assert.equal(foundnotes[0],"Showing results for search [third]");
            assert.equal(foundnotes[1],"a third note");
        });
    })
})

