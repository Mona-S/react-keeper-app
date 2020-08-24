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

    function deleteNote(id){
        setNotes(prevNotes => {
            prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>

      {notes.map((noteItem, index) => {
          return <Note 
          key={index}
          id={index}
          title={noteItem.title} 
          content={noteItem.content} 
          onDelete={deleteNote}
          />
    })}
      <Footer />
      
    </div>
  );
}

export default App;