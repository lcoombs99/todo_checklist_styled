import { useState } from 'react';
import TodoInput from './components/TodoInput';
import './App.css';
import styled from 'styled-components';

const ListItem = styled.li`
    &:hover {
        background: white;
        color: #492365;
    }
    margin: 1rem 0;
    background: #492365;
    color: white;
    padding: 1rem;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`
const App = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 't1', text: 'Finish homework' },
    { id: 't2', text: 'Go on a hike' }
  ]);

  const addTodoHandler = enteredText => {
    setTodoItems(prevTodos => [
      { id: Math.random().toString(), text: enteredText },
      ...prevTodos
    ]);
  };

  const deleteItemHandler = todoId => {
    setTodoItems(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div id="app-container">
      <section id="todo-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section id="todos">
        <ul>
          {todoItems.map(todo => (
            <ListItem key={todo.id} onClick={() => deleteItemHandler(todo.id)}>
              {todo.text}
            </ListItem>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;