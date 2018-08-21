import React, { Component } from 'react';
import Avatar from './Avatar';


function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar author={props.data.author} />
      <div className="UserInfo-name">
        {props.data.author.name}
      </div>
    </div>
  );
}

export default UserInfo;
