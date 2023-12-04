import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./todo/Header";
import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
import Modal from "./todo/Modal";

function App() {
  const { open: isModalOpen } = useSelector((state) => state.modal);

  // const [todos, setTodos] = useState([]) => redux'la birlikte buna ihtiyacım yok
  // const [user, setUser] = useState(false)
  const [language, setLanguage] = useState("tr");
  const [dark, setDark] = useState(true);
  // const [modal, setModal] = useState(false)


  return (
    <>
      {isModalOpen && <Modal />}
      <Header />
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
