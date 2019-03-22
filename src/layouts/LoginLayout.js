import React from 'react';
import styles from './login_layout.css';

const LoginLayout = (props) => {
  return(
    <div className={styles.container}>{props.children}</div>
  )
}

export default LoginLayout;
