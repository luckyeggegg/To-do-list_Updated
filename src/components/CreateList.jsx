import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

function CreateNewList(props) {
  const [newList, setList] = useState({
    title: "",
  });

  function handleChange(event) {
    const { value } = event.target;

    setList({ title: value });
  }

  function submitList(event) {
    props.onAdd(newList.title);
    setList({
      title: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-list">
        <input
          name="title"
          onChange={handleChange}
          value={newList.title}
          placeholder={'New "To-do-list"...'}
        />
        <Fab onClick={submitList}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateNewList;
