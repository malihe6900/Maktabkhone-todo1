import { observable, action, computed } from "mobx";
import TodoModel from "./TodoModel";
import TodoItems from "../components/TodoItems";

class TodoStore {
  @observable todos = [];
  lastID = 0;
  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
  }
  
  @action
  getTodoCount(){
    return this.todos.length
  }
}

const todoStore = new TodoStore();
export default todoStore;
