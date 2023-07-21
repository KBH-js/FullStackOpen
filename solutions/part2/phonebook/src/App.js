import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: `040 - 1234567` },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState(``);
  const [keyword, setKeyword] = useState(``);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumChange = (e) => {
    setNewNum(e.target.value);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else setPersons(persons.concat({ name: newName }));
    setNewName(``);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input value={keyword} onChange={handleKeywordChange} />
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
