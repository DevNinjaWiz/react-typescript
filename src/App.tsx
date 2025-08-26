import style from "./App.module.css";
import { List } from "./components";

function App() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Smith" },
  ];

  return (
    <section className={style.container}>
      <h1>Todo App</h1>

      <h2>Simple List</h2>
      <List className={style.listContainer}>
        {users.map((user) => (
          <List.Item key={user.id} index={user.id}>
            {user.name}
          </List.Item>
        ))}
      </List>

      <br></br>

      <h2>Selectable List</h2>
      <List selectable>
        {users.map((user) => (
          <List.Item key={user.id} index={user.id}>
            {user.name}
          </List.Item>
        ))}
      </List>

      <br></br>

      <h2>Nested List</h2>
      <List selectable>
        <List.Item key="1" index={1}>
          Parent 1
          <List selectable>
            <List.Item key="1-1" index={1.1}>
              Child 1
            </List.Item>
            <List.Item key="1-2" index={1.2}>
              Child 2
            </List.Item>
          </List>
        </List.Item>

        <List.Item key="2" index={2}>
          Parent 2
          <List>
            <List.Item key="2-1" index={2.1}>
              Child 1 (non-selectable)
            </List.Item>
            <List.Item key="2-2" index={2.2}>
              Child 2
            </List.Item>
          </List>
        </List.Item>

        <List.Item key="3" index={3}>
          Parent 3
        </List.Item>
      </List>
    </section>
  );
}

export default App;
