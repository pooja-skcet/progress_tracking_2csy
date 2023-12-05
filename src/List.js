import React from 'react'
import propTypes from 'prop-types'
const List = ({items}) => {
  return (
   <ul>
   {items.map((item,index) =>(
    <li key={index}>{item}</li>
   ))}
   </ul>
  );
};
List.propTypes = {
  items: propTypes.arrayOf(propTypes.string).isRequired
 };
 

export default List