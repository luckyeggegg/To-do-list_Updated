import React, { useState } from "react";

function EditItem(props) {
  const [updateItem, setUpdateItem] = useState({
    updateItemID: props.itemID, // Include itemID in the state
    updateItemTitle: props.oldTitle,
    updateItemContent: props.oldContent,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateItem((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdate(updateItem);
    props.updateSubmit();
  }
  return (
    <div>
      <form className="edit-item" onSubmit={handleSubmit}>
        <label>Item Title</label>
        <input
          type="text"
          required
          name="updateItemTitle"
          value={updateItem.updateItemTitle}
          onChange={handleChange}
        />
        <label>Item Content</label>
        <textarea
          name="updateItemContent"
          value={updateItem.updateItemContent}
          onChange={handleChange}
        />
        <div className="edit-item">
          <button type="submit" className="edit-item">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
