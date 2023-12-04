import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../stores/todo";

const EditTodo = ({ data, close }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(data.done);

  // const {data} = useSelector(state => state.modal)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );
    close();
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(data,null,2)}</pre> => veriyi göstermek için */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
          ></input>
          Tamamlandı olarak işaretle
        </label>
        <button type="submit">Kaydet</button>
      </form>
      <button onClick={close}>Kapat</button>
    </div>
  );
};

export default EditTodo;
