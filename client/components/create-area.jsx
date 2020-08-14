import React, {useState} from "react";

function CreateArea(){

    const [note, setNote] = useState({
        title: "",
        content: ""

    });

    function handleChange(event){
        // const {name, value} = event.target;

        // setNote(prevNote => {

        // });
    }

    return(
        <div>
            <form>
                <input 
                    name="title" 
                    onChange={handleChange} 
                    value={note.title} 
                    placeholder="Title"
                />
                <textarea 
                    name="content" 
                    onChange={handleChange}
                    value={note.content} 
                    placeholder="Write a note" 
                    rows="3">
                </textarea>
                <button>Add</button>

            </form>
        </div>
    )
}

export default CreateArea;