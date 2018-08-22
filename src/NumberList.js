import React, { Component } from 'react';

/*
  - Keys help React identify which items have changed, are added, or are removed.
    Keys should be given to the elements inside the array to give the elements a stable identity.
  -The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
   Most often you would use IDs from your data as keys:
  - When you don’t have stable IDs for rendered items, you may use the item index as a key as a last
    resort:
      const todoItems = todos.map((todo, index) =>
        // Only do this if items have no stable IDs
        <li key={index}>
          {todo.text}
        </li>
      );






*/
function NumberList(props) {
  const items = props.items;

  // const listItems = items.map(item => <li key={item.toString()}>{item}</li>)

  // return <ul>{listItems}</ul>
  // or
  return (
    <ul>
      {
        items.map(item => {
          return <li key={item.toString()}>{item}</li>
        })
      }
    </ul>
  );
}


export default NumberList;
