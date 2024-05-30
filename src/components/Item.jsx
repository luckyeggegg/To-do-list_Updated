import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditItem from "./EditItem";

function Item(props) {
  const [checked, setChecked] = useState(false);
  const [editStatus, setEditStatus] = useState(false);

  function handleDelete() {
    props.itemDelete(props.itemID);
  }

  function handleChecked() {
    setChecked(!checked);
  }

  function handleEdit() {
    setEditStatus(!editStatus);
    props.itemEdit();
  }

  function handleEditSubmit(itemUpdated) {
    props.itemUpdate(itemUpdated);
  }

  function updateSubmit() {
    setEditStatus(false);
  }

  useEffect(() => {
    // If a new item is being added, set editStatus to false
    if (props.newItemStatus) {
      setEditStatus(false);
    }
  }, [props.newItemStatus]); // Only re-run the effect if newItemStatus changes

  return (
    <div className="item">
      <div className="item-title-buttons">
        <div className="check-button">
          <div className="checkbox">
            <input
              type="checkbox"
              checked={checked}
              name={props.itemTitle}
              value={props.itemTitle}
              id={props.itemID}
              onChange={handleChecked}
            />
            <label htmlFor={props.itemID}>
              {/* Use htmlFor for accessibility */}
              <h1 className={checked ? "checked-title" : ""}>
                {props.itemTitle}
              </h1>
            </label>
          </div>
          <div>
            <button onClick={handleEdit}>
              <EditNoteIcon />
            </button>
            <button onClick={handleDelete}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
      <div>
        {props.itemContent && <textarea readOnly value={props.itemContent} />}
      </div>
      <div>
        {editStatus ? (
          <EditItem
            oldTitle={props.itemTitle}
            oldContent={props.itemContent}
            itemID={props.itemID} // Pass the itemID to EditItem
            onUpdate={handleEditSubmit} // Pass the handler to EditItem
            updateSubmit={updateSubmit}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Item;
