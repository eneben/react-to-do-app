import { uid } from "uid";

export default function CreateListForm({ lists, onSetList, onSetIsCreating }) {
  function handleCreateListSubmit(event) {
    event.preventDefault();
    const newListName = event.target.elements.createListInput.value;
    const newList = {
      key: uid(),
      name: newListName,
    };
    onSetList(newList);
    onSetIsCreating();
  }

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
