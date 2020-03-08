import { css } from 'emotion';
import React from 'react';

import outline from '../images/logo/logo-outline.svg';
import logo from '../images/logo/logo-short.svg';
import sv from '../utils/vars';

const styles = {
  loader: css`
    align-items: center;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: ${sv.white};
  `,
  container: css`
    width: 400px;
    position: relative;
  `,
  text: css`
    width: 100%;
  `,
  outline: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  `,
  img: css`
    width: 100%;
  `,
};

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <div className={styles.text}>
          <img src={logo} />
        </div>
        <div className={styles.outline}>
          <img src={outline} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
