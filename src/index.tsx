import './sass/main.scss';
import React from 'react';
import { render } from 'react-dom';
import TodoApp from './TodoApp';

// render(
//   <Launch data-before="一片空白，" data-after="是为了重新开始。" />,
//   document.getElementById('root')
// );

render(<TodoApp />, document.getElementById('root'));
