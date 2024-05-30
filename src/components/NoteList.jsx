import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateItem from "./CreateItem";
import Item from "./Item";

function NoteList(props) {
  const [itemLists, setItemLists] = useState([]);
  const [itemKey, setItemKey] = useState(1);
  const [newItemStatus, setNewItemStatus] = useState(false);

  function handleDelete() {
    props.onDelete(props.listID);
  }

  function addItem(itemNew) {
    const newItem = {
      itemKey: itemKey,
      itemID: Date.now(),
      itemTitle: itemNew.itemTitle,
      itemContent: itemNew.itemContent,
    };
    setItemLists((prevItemLists) => {
      return [...prevItemLists, newItem];
    });
    setItemKey(itemKey + 1);
  }

  function handleAddClick() {
    setNewItemStatus(true);
  }

  function handleSubmitClick() {
    setNewItemStatus(false);
  }

  function deleteItem(id) {
    setItemLists((prevItems) => {
      return prevItems.filter((item) => {
        return item.itemID !== id;
      });
    });
  }

  function editItem() {
    setNewItemStatus(false);
  }

  function updateItem(itemUpdated) {
    setItemLists((prevItemLists) => {
      return prevItemLists.map((item) => {
        if (item.itemID === itemUpdated.updateItemID) {
          return {
            ...item,
            itemTitle: itemUpdated.updateItemTitle,
            itemContent: itemUpdated.updateItemContent,
          };
        } else {
          return item;
        }
      });
    });
  }

  return (
    <div className="note-list">
      <div className="note-title-buttons">
        <h1>{props.title}</h1>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
      {itemLists.map((item) => {
        return (
          <Item
            key={item.itemKey}
            itemID={item.itemID}
            itemTitle={item.itemTitle}
            itemContent={item.itemContent}
            itemDelete={deleteItem}
            itemEdit={editItem}
            newItemStatus={newItemStatus} // pass the newItemStatus state to the Item
            itemUpdate={updateItem}
          />
        );
      })}
      {newItemStatus ? (
        <CreateItem onAdd={addItem} onSubmit={handleSubmitClick} />
      ) : (
        <div className="add-new-item">
          <button className="add-new-item" onClick={handleAddClick}>
            ADD NEW ITEM
          </button>
        </div>
      )}
    </div>
  );
}

export default NoteList;
