import { uid } from "uid";
import AddCircle from "../AddCircle/AddCircle";
import "./ListsOverview.css";
import { useState } from "react";

export default function ListsOverview() {
  const [isCreating, setIsCreating] = useState(false);
  const [lists, setLists] = useState([
    { key: uid(), name: "Einkaufsliste" },
    { key: uid(), name: "To-do-Liste" },
  ]);

  function handleCreateList() {
    return setIsCreating(true);
  }

  function handleCreateListSubmit(event) {
    event.preventDefault();
    const newListName = event.target.elements.createListInput.value;

    const newList = {
      key: uid(),
      name: newListName,
    };
    setLists([newList, ...lists]);
    setIsCreating(false);
  }

  if (isCreating) {
    return (
      <section className="listOverview">
        <form onSubmit={handleCreateListSubmit}>
          <label htmlFor="createListInput"></label>
          <input
            autoFocus
            type="text"
            name="createListInput"
            id="createListInput"
            required
          ></input>
          <button type="submit">Erstelle neue Liste</button>
        </form>
      </section>
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
