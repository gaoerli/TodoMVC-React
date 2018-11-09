import React, { Component } from 'react';
import { ItemsContext } from './Context';
export default class TodoItems extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   todoItems: [],
    // };
  }

  // componentDidMount() {
  //   this.setState({
  //     todoItems: [
  //       { todo: { id: 1, title: '12' } },
  //       { todo: { id: 2, title: '13' } },
  //     ],
  //   });
  // }

  handleEdit = e => {
    console.log('双击');
  };

  onToggle = e => {
    console.log(e.target.checked);
  };

  render() {
    return (
      <ItemsContext.Consumer>
        {({ todoItems, delTodo, toggleTodo }) => (
          <ul className="todo-list">
            {todoItems.map(item => (
              <li key={item.todo.id}>
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.todo.completed}
                  onChange={toggleTodo.bind(this, item)}
                />
                <div className="viwe">
                  <label onDoubleClick={this.handleEdit}>
                    {item.todo.title}
                  </label>
                </div>
                <button
                  className="destroy"
                  onClick={delTodo.bind(this, item)}
                />
              </li>
            ))}
          </ul>
        )}
      </ItemsContext.Consumer>
      // <ul className="todo-list">
      //   {todoItems.map(item => (
      //     <li key={item.todo.id}>
      //       <div className="viwe">
      //         <label onDoubleClick={this.handleEdit}>{item.todo.title}</label>
      //       </div>
      //     </li>
      //   ))}
      // </ul>
    );
  }
}
