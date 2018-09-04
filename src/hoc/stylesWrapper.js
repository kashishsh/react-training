import { React } from 'react';

import styles from './../styles/common';

const translateProps = (props) => {
  let _styles = { ...styles.default}

  if(props.disabled) {
    _styles = { ..._styles, ...styles.disabled};
  }

  const newProps = {...props, styles: _styles};

  return newProps;
}

export default (wrappedComponent) => {
  return function wrappedRender(args) {
    console.log('args', args);
    return wrappedComponent(translateProps(args));
  }
}



