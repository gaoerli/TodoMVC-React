import React from 'react';

const ItemsContext = React.createContext({
  todoItems: [],
  add: () => {},
});

const ENTER_KEY = 13;

export { ItemsContext, ENTER_KEY };
