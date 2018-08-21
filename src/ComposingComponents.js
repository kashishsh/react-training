import React, { Component } from 'react';

import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function ComposingComponents() {
  return (
    <div>
      <ClassComponent name="I am a class based component"/>
      <FunctionalComponent name="I am a class based component"/>
    </div>
  );
}

export default ComposingComponents;

