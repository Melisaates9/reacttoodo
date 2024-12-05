import { useState } from "react";
import styled from "styled-components";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const Wrapper = styled.div`
    text-align: center;
    height: 100vh;
    padding-top: 300px;
  `;

  const Input = styled.input`
    padding: 10px;
  `;
  const Button = styled.button`
    padding: 10px;
    background-color: #49416d;
    color: white;
    border: 2px solid;
  `;

  function changeInput(e) {
    setInput(e.target.value);
  }

  function addToDo() {
    setTodos([...todos, input]);
    setInput("");
  }
  function deleteTodo(value) {
    setTodos((todos) => {
      return todos.filter((todo) => todo !== value);
    });
  }

  return (
    <>
      <Wrapper>
        <Input onChange={changeInput} value={input} type="text" autoFocus />
        <Button onClick={addToDo}>Ekle</Button>
        <div>
          <ul style={{ cursor: "pointer" }}>
            {todos.map((todo, index) => (
              //index listeler içerisine bakıp hangi numaralı olanın gelceğini sıralıyor
              <li key={index} onClick={() => deleteTodo(todo)}>
                {todo}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
