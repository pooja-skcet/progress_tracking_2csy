import React from 'react'
import List from './List';
const Array = () => {
    const itemsArray=['Item1','Item2','Item3'];
  return (
    <div>
    <h1>Items List Example</h1>
    <List items={itemsArray}/>
    </div>
  );;
};

export default Array;