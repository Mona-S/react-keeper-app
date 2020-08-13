import React, {useState} from "react";

function CreateArea(){

    const [note, setNote] = useState({
        title: "",
        content: ""

    });

    return(
        <div>
            <form>
                <input placeholder="Title"/>
                <textarea name="" placeholder="Write a note" rows="3"></textarea>
                <button>Add</button>

            </form>
        </div>
    )
}

export default CreateArea;