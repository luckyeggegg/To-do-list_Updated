import React, { useState } from "react";

function CreateItem(props) {
  const [item, setItem] = useState({
    itemTitle: "",
    itemContent: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }

  function submitItem(event) {
    event.preventDefault();
    props.onAdd(item);
    props.onSubmit();
    setItem({
      itemTitle: "",
      itemContent: "",
    });
  }

  return (
    <div>
      <form className="submit-item" onSubmit={submitItem}>
        <label>Item Title</label>
        <input
          type="text"
          required
          name="itemTitle"
          value={item.itemTitle}
          onChange={handleChange}
        />
        <label>Item Content</label>
        <textarea
          name="itemContent"
          value={item.itemContent}
          onChange={handleChange}
        />
        <div className="submit-item">
          <button type="submit" className="submit-item">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateItem;
