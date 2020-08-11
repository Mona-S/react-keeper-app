import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import notes from "../notes.jsx";


function App() {
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
    </div>
  );
}

export default App;