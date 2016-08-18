/* Class definition for a simple note taking app
*/
/**
 * 
 * 
 * @param {String} author
 */
var NotesApp = function(author){
    if(typeof author === 'string'){
        this.author = author;                
    }
    this.notes = [];

    /**
     * 
     * 
     * @param {String} note_content
     */
    this.addNote = function(note_content) {
        if(this.isValidNoteContent)
        this.notes.push(note_content);
    }

    /**
     * 
     * 
     * @param {Integer} note_id
     * @param {String} note_content
     */
    this.editNote = function(note_id,note_content) {
        if(this.isValidId(note_id) && this.isValidNoteContent(note_content))
        this.notes[note_id] = note_content;
    }

    /**
     * 
     * 
     * @returns
     */
    this.listNotes = function() {
        let rnotes = [];    
        for(let i=0;i<this.notes.length;i++) {
            rnotes.push(this.notes[i]);
        }
        return rnotes;
    }

    /**
     * 
     * 
     * @param {Integer} note_id
     * @returns
     */
    this.getNote = function(note_id) {
        if(this.isValidId(note_id))
        return this.notes[note_id];
    }

    /**
     * 
     * 
     * @param {Integer} note_id
     */
    this.deleteNote = function(note_id) {
        if(this.isValidId(note_id))
        this.notes.splice(note_id,1);
    }

    /**
     * 
     * 
     * @param {String} searchtext
     * @returns
     */
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

    /**
     * 
     * 
     * @param {Integer} note_id
     * @returns
     */
    this.isValidId = function(note_id){
        if(isNaN(note_id) || note_id < 0 || note_id > this.notes.length || this.notes[note_id] === undefined){
            return false;
        }
        return true;
    }

    /**
     * 
     * 
     * @param {String} note_content
     * @returns
     */
    this.isValidNoteContent = function(note_content){
        if(typeof note_content === 'string'){
            return true;
        }
        return false;
    }
}

module.exports = NotesApp;
