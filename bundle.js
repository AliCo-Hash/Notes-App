(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          return this.notes = [];
        }
        setNotes(data) {
          this.notes = data;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.api = api2;
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#add-note-button");
          this.buttonEl.addEventListener("click", () => {
            const newNote = document.querySelector("#note-input").value;
            this.api.createNote(newNote, (data) => {
              this.addNewNote(newNote);
              this.displayNotes();
            });
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((note) => {
            note.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
          document.querySelector("#note-input").value = "";
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createNote(note, callback) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: `${note}` })
          }).then((response) => {
            return response.json();
          }).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  console.log(model.getNotes());
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
})();
