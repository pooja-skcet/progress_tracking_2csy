import React from 'react';
import TodoItem from './TodoItem'; // Adjust the import path as necessary
function TodoList() {
 const items = ["Item 1", "Item 2", "Item 3"]; // Example to-do items
 return (
 <ul>
 {items.map((item, index) => (
 <TodoItem key={index} content={item} />
 ))}
 </ul>
 );
}
export default TodoList;


