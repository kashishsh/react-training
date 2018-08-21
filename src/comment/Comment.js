import React, { Component } from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo data={props.data}/>
      <div className="Comment-text">
        {props.data.text}
      </div>
      <div className="Comment-date">
        {props.data.date}
      </div>
    </div>
  );
}

export default Comment;
