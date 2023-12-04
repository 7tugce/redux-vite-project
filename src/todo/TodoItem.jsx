import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteTodo } from "../stores/todo";
import { openModal } from "../stores/modal";

const TodoItem = ({ todo}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.auth)

  const handleDelete = () => {
    // setTodos(todos => todos.filter(t=> t.id !== todo.id)) redux olmadan

    dispatch(deleteTodo(todo.id));
  };
  const handleEdit = () => {
  dispatch(  openModal({
    name: "edit-todo",
    data: todo,
  }))
  };
  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title}- {todo.user}
      </span>

      {todo.user === user.id && (
        <>
          {" "}
          <button onClick={handleDelete}>Sil</button>
          <button onClick={handleEdit}>Düzenle</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
