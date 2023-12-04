import React, { useState } from "react";
import { nanoid } from "nanoid";
//import { addTodo } from "../stores/todo";
import { useDispatch, useSelector } from "react-redux";
import { handleAddTodo } from "../utils";

const AddTodo = () => {
  //const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(
    //   addTodo({
    //     title: todo,
    //     done: false,
    //     id: nanoid(),
    //     user: user.id,  => dispatch'li yöntem
    //   })
    // );

    handleAddTodo({
      title: todo,
      done: false,
      id: nanoid(),
      user: user.id,
    });
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button disabled={!todo || !user} type="submit">
        Ekle
      </button>
    </form>
  );
};

export default AddTodo;
