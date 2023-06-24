import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    axios.post("http://localhost:5000/notes",newNote);
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  

  function deleteNote(id) {
    axios.delete(`http://localhost:5000/notes/${id}`);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    axios.get("http://localhost:5000/notes").then((allNotes) => {
      setNotes(allNotes.data);
    })
  },[]);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
