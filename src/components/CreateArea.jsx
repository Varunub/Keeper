import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import Zoom from '@mui/material/Zoom';
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [curr, change] = useState(false);
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
    change(false);
    event.preventDefault();
  }
  function handleClick() {
    change(true);
  }
  return (
    <div>
      <form className="create-note">
        {}
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          hidden={!curr}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick={handleClick}
          rows={curr ? "3" : "1"}
        />
        <Zoom in={curr}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
