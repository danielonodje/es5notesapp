/* Class definition for a simple note taking app
*/
var notesapp = function(author){
    this.author = author
    this.notes = [];

    this.addNote = function(note_content) {
        this.notes.push(note_content);
    }

    this.editNote = function(note_id,note_content) {
        this.notes[note_id] = note_content;
    }

    this.listNotes = function() {
        let rnotes = [];    
        for(let i=0;i<this.notes.length;i++) {
            rnotes.push(this.notes[i]);
        }
        return rnotes;
    }

    this.getNote = function(note_id) {
        return this.notes[note_id];
    }

    this.deleteNote = function(note_id) {
        this.notes.splice(note_id,1);
    }

    this.searchNote = function(searchtext) {
        var searchnotes = ["Showing results for search ["+searchtext+"]"];
        for(var i=0;i<this.notes.length;i++) {
            if(this.notes[i].indexOf(searchtext) > -1){
            	searchnotes.push(this.notes[i]);	
            }
        }
        if(searchnotes.length <= 1){
        	searchnotes.push("no results found");
        }
        return searchnotes;
    }
}

module.exports = notesapp;
