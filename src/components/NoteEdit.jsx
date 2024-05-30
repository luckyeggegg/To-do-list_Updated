import React, { usestate } from "react";

function NoteEdit(props) {
  const [newNote, setNote] = useState({
    newTitle: "",
    newDetail: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(());
  }

  return (
    <div className="note-edit">
      <form className="note-edit">
        <label>Title:</label>
        <input type="text" name="newTitle" value />
        <label>Detail:</label>
        <textarea name="newDetail" />
      </form>
    </div>
  );
}
