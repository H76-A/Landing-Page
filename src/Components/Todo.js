import React, { useState } from "react";
import { Form , Button, Card } from "react-bootstrap";

import "../Components/Styles/Todo.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showAddButton,setShowAddButton]=useState(true)

  // Add New Todos
  const addtodos = (todo) => setTodos((prevtodos) => [...prevtodos, todo]);

  // Submit Todos Form
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title: title,
      task: task,
      id: Math.floor(Math.random() * 100),
    };
    addtodos(todo);
    setTitle("");
    setTask("");
    setShowAdd(false);
    setShowAddButton(true)
  };

  // Remove Todo from Todos
  const handleRemove = (id) => {
    setTodos((prevtodos) => {
      return prevtodos.filter((todo) => {
        return id === todo.id;
      });
    });
  };

  const handleShowAdd =()=>{
    setShowAdd(true) 
    setShowAddButton(false)
  }
  console.log(todos);

  return (
    <div className="Todo">
      <h1>List Of Todo's</h1>
      <h3>Insert Todos</h3>
      
      <div className="todo-card">
        {todos.map((todo) => (
          <div key={todo.id}>
            <Card>
            <Card.Header>{todo.title}</Card.Header>
              <Card.Body>
           
            <Card.Text>{todo.task}</Card.Text>
            <Button variant="danger" onClick={handleRemove}>Remove</Button>
            </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div>
        {showAddButton && 
        <Button  onClick={handleShowAdd}>Add New</Button> }
        {showAdd && (
          <Form onSubmit={handleSubmit}>
            <Form.Group >
              <Form.Label>
                <Form.Control
                  type={"text"}
                  placeholder="Title goes here"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Control
                  type={"text"}
                  placeholder="Details Goes Here "
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </Form.Label>
            </Form.Group>

            <Button variant="success" onClick={handleSubmit}>Submit</Button>
          </Form>
        )}
      </div>
    </div>
  );
}
