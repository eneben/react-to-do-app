import { uid } from "uid";
import AddCircle from "../AddCircle/AddCircle";
import "./ListsOverview.css";
import { useState } from "react";
import CreateListForm from "../CreateListForm/CreateListForm";

export default function ListsOverview() {
  const [isCreating, setIsCreating] = useState(false);
  const [lists, setLists] = useState([
    { key: uid(), name: "Einkaufsliste" },
    { key: uid(), name: "To-do-Liste" },
  ]);

  function handleCreateList() {
    return setIsCreating(true);
  }

  function handleSetList(newList) {
    setLists([newList, ...lists]);
  }

  function handleSetIsCreating() {
    setIsCreating(!isCreating);
  }

  if (isCreating) {
    return (
      <CreateListForm
        lists={lists}
        onSetIsCreating={handleSetIsCreating}
        onSetList={handleSetList}
      />
    );
  }

  return (
    <section className="listOverview">
      <ul className="listOfLists">
        {lists.map(({ key, name }) => {
          return <li key={key}>{name}</li>;
        })}
      </ul>
      <button
        className="buttonAddCircle"
        type="button"
        onClick={handleCreateList}
      >
        <AddCircle />
        <br />
        Neue Liste hinzufügen!
      </button>
    </section>
  );
}
