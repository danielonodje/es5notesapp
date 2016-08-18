/* Class definition for a simple note taking app
*/
var notesapp = function(author){
    this.author = author
    this.notes = [];

    this.addNote = function(note_content) {
        if(this.isValidNoteContent)
        this.notes.push(note_content);
    }

    this.editNote = function(note_id,note_content) {
        if(this.isValidId(note_id) && this.isValidNoteContent(note_content))
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
        if(this.isValidId(note_id))
        return this.notes[note_id];
    }

    this.deleteNote = function(note_id) {
        if(this.isValidId(note_id))
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

    this.isValidId = function(note_id){
        if(isNaN(note_id) || note_id < 0 || note_id > this.notes.length || this.notes[note_id] === undefined){
            return false;
        }
        return true;
    }

    this.isValidNoteContent = function(note_content){
        if(typeof note_content === 'string'){
            return true;
        }
        return false;
    }
}

module.exports = notesapp;
