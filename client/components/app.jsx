import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import notes from "../notes.jsx";
import CreateArea from "./create-area";


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
           return [... prevNotes, newNote];
        })

    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>

      {notes.map(noteItem => {
          return <Note
        //   key={singleNote.key}
          title={noteItem.title}
          content={noteItem.content}
          />
    })}
      <Footer />
      
    </div>
  );
}

export default App;