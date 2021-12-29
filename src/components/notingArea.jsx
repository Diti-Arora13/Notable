import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function NotingArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  return (
    <div>
      <form>
       
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          spellCheck="false"
          />

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows = "3"
          spellCheck="false"
        />
        <Zoom in="true" >
          <Fab className="plus-btn" onClick={submitNote}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NotingArea;
