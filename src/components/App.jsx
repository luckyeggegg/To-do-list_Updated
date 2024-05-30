import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateList from "./CreateList";
import NoteList from "./NoteList";

function App() {
  const [lists, setLists] = useState([]);
  const [listID, setListID] = useState(1);

  function addList(listTitle) {
    const newList = {
      listID: listID,
      listTitle: listTitle,
    };
    setLists((prevLists) => {
      return [...prevLists, newList];
    });
    setListID(listID + 1);
  }

  function deleteList(id) {
    setLists((prevLists) => {
      return prevLists.filter((list) => {
        return list.listID !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateList onAdd={addList} />
      {lists.map((list) => {
        return (
          <NoteList
            key={list.listID}
            listID={list.listID}
            title={list.listTitle}
            onDelete={deleteList}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
