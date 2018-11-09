import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { ItemsContext } from './components/Context';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      delTodo: this.delTodo,
      toggleTodo: this.toggleTodo,
    };
  }

  // 增
  addTodo = newTodo => {
    const todo = {
      todo: {
        id: Date.now(),
        title: newTodo,
        completed: false,
      },
    };

    this.setState(prevState => ({
      todoItems: prevState.todoItems.concat(todo),
    }));
  };

  // 删
  delTodo = thisTodo => {
    const { todo } = thisTodo;

    this.setState(({ todoItems }) => ({
      todoItems: todoItems.filter(item => item.todo.id !== todo.id),
    }));
  };

  // 单选
  toggleTodo = todo => {
    const state = this.state.todoItems;
    const newlist = state.map(item => {
      if (item.id === todo.id) {
        item.completed = !item.completed;
      }
      // return item;
    });
    console.log(newlist);
    // this.setState(({ todoItems }) => ({
    //   todoItems: todoItems.map(item => {
    //     if (item.id === todo.id) {
    //       item.completed = !!todo.completed;
    //     }
    //     return item;
    //   }),
    // }));
    this.setState({
      todoItems: newlist,
    });
    // const newTodo = Object.assign(todo, { completed: isChecked });
    // this.setState({});
    // this.setState({todoItems } => {
    //  const new = todoItems.map(item => {
    //     if(item.id === todo.id) {
    //       item.completed = isChecked;
    //     }
    //     return ;
    //   })
    // })
  };
  componentDidMount() {
    const todos = localStorage.getItem('todoapp');
    if (todos === null || todos === '[]') {
      localStorage.setItem('todoapp', JSON.stringify([]));
      return;
    } else {
      const todoItems = JSON.parse(todos).todoItems;
      this.setState({
        todoItems,
      });
    }
  }

  componentDidUpdate() {
    // console.log(this.state);
    localStorage.setItem('todoapp', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="todoapp">
        <ItemsContext.Provider value={this.state}>
          <Header onAddTodo={this.addTodo} />
          <Main />
        </ItemsContext.Provider>
      </div>
    );
  }
}
