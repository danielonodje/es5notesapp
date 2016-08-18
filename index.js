/* Class definition for a simple note taking app
*/
var notesapp = function(author){
    this.author = author
    this.notes = [];
}

// notesapp.prototype.notes = [];

notesapp.prototype.addNote = function(note_content) {
        this.notes.push(note_content);
    }

module.exports = notesapp;
