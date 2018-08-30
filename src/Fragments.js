
import React, { Component, Fragment } from 'react';
// If our component is returning multiple elements than we, need to wrap them with a parent element(div etc)
// and creates an extra element which is not required actually. We can solve this using fragments.
// - We can pass return element in form of array to escape this:
// return (
//    [
//        <div>Hello</div>,
//        <div>Hi</div>
//      ]
//  )
/*
  Other way is to use fragments:
    <Fragment>
      <div>Hello</div>,
      <div>Hi</div>
    </Fragment>

    or
    <>
      <div>Hello</div>,
      <div>Hi</div>
    </>
    - But you can not use properties with above syntax, so use fragments.


*/
function Fragments() {
  return (
      <Fragment>
        <div>Hello</div>
        <div>Hi</div>
      </Fragment>
  );
}

export default Fragments;
