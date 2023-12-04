import store from "./stores";
import { addTodo } from "./stores/todo";


//  store.getState()  => bütün state'leri getirir


export const handleAddTodo=todo=>{
          store.dispatch(addTodo(todo))
}