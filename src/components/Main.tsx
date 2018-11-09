import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTodoCount: 0 };
  }

  render() {
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={this.toggleAll}
          checked={this.state.activeTodoCount === 0}
        />
        <label htmlFor="toggle-all" />
        <TodoItems />
      </section>
    );
  }
}
