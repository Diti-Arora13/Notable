import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
      <h5 className="del" onClick={handleClick}>
        <DeleteIcon />
      </h5>
    </div>
  );
}

export default Notes;
