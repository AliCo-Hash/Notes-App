// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi')

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

console.log(model.getNotes());

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});