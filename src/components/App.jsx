import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNote from "./NewNote";

function App() {
  const [notes, setNotes] = useState([]);

  function coolNote(newNote) {
    setNotes((lastNote) => {
      return [...lastNote, newNote];
    });
  }

  function badNote(id) {
    setNotes((lastNote) => {
      return lastNote.filter((_, kluch) => {
        return kluch !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NewNote onAdd={coolNote} />
      {notes.map((noteItem, kluch) => {
        return (
          <Note
            id={kluch}
            key={kluch}
            content={noteItem.content}
            title={noteItem.title}
            onDelete={badNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

