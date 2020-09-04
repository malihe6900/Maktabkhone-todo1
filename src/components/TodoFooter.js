import React, { Component } from "react";
import todoStore from "../stores/TodoStore";

class TodoFooter extends Component {
 


    
  render() {
    return (
        <footer class="footer">
        <span class="todo-count"><strong>{todoStore.getTodoCount()}</strong> item left</span>
        <ul class="filters">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <button class="clear-completed">Clear completed</button>
        </footer>
    )
  }
}

export default TodoFooter;
