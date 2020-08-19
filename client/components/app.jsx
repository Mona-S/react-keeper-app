import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import notes from "../notes.jsx";
import CreateArea from "./create-area";


function App() {

    function addNote(note){
        console.log(note);

    }
  return (
    <div>
      <Header />
      {notes.map(singleNote => 
          <Note
          key={singleNote.key}
          title={singleNote.title}
          content={singleNote.content}
          />
      )}
      <Footer />
      <CreateArea onAdd={addNote}/>
    </div>
  );
}

export default App;