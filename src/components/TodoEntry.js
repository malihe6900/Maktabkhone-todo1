import React, { Component } from "react";
import todoStore from "../stores/TodoStore";

const ENTER_KEY = 13;

class TodoEntry extends Component {
  state = {
    value: "",
  };

  handeleKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    todoStore.addTodo(this.state.value);

    this.setState({
      value: " ",
    });
  };

  render() {
    return (
      <div>
        <header class="header">
          <h1>todos</h1>
          <input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            onKeyDown={(event) => this.handeleKeyDown(event)}
            class="new-todo"
            placeholder="What needs to be done?"
            autofocus
          />
        </header>
      </div>
    );
  }
}

export default TodoEntry;
