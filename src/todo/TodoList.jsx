import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {

const {todos} = useSelector(state => state.todo)
//const todos = useDispatch(state => state.todo.todos) iki şekilde de yapabilirsin

  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
