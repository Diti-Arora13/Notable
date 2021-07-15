import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function NotingArea(props) {

  const [isExpaned, setIsExpaned] = useState(false)

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

  function expand(){
    setIsExpaned(true);
  }
  
  return (
    <div>
      <form>
       
    {isExpaned ?  <input
      name="title"
      onChange={handleChange}
      value={note.title}
      placeholder="Title"
      spellCheck="false"
      /> : null}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpaned ? 3 : 1}
          spellCheck="false"
          onClick={expand}
        />
        <Zoom in={isExpaned ? true : false}>
          <Fab className="plus-btn" onClick={submitNote}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NotingArea;
