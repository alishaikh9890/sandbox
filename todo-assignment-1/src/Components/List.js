import React from "react";
import { v4 as uuid } from "uuid";

const List = () => {
  const [todo, setTodo] = React.useState("");
  const [list, setList] = React.useState([]);

  const handleTodo = () => {
    const listData = {
      todo,
      status: false,
      id: uuid()
    };
    setList([...list, listData]);
  };

  const updateTodo = (id) => {
    const update = list.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setList(update);
  };

  const deleteTodo = (id) => {
    const update = list.filter((el) => el.id !== id);
    setList(update);
  };

  return (
    <div className="List">
      <h3>Add Todos</h3>

      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={() => handleTodo()}>Add todo</button>

      <h3>List of Todos</h3>

      <div className="Todo">
        {list.map((el) => (
          <div
            className="todos"
            style={
              el.status
                ? { backgroundColor: "red" }
                : { backgroundColor: "green" }
            }
          >
            <h4>{el.todo}</h4>
            <h4>{el.status ? "Complete" : "Incomplete"}</h4>
            <button onClick={() => updateTodo(el.id)}>Update Todo</button>
            <button onClick={() => deleteTodo(el.id)}>Delete Todo</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
