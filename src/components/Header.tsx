import React, { Component } from 'react';

const ENTER_KEY = 13;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { newTodo: '' };
  }

  // 输入
  handleChange = event => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  // 回车新增
  handleNewTodoKeyDown = event => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = this.state.newTodo.trim();

    if (val) {
      this.props.onAddTodo(val);
      this.setState({ newTodo: '' });
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.newTodo}
          onKeyDown={this.handleNewTodoKeyDown}
          onChange={this.handleChange}
          autoFocus={true}
        />
      </header>
    );
  }
}
