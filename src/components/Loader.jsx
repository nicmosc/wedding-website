import { css, cx } from 'emotion';
import React, { useEffect, useRef, useState } from 'react';
import Vivus from 'vivus';

import { Outline } from '../components/Svgs';
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
    transition: background 0s 2s linear;
  `,
  noBackground: css`
    background: none;
  `,
  container: css`
    opacity: 0;
    transform: scale(0.9);
    width: 350px;
    height: 350px;
    position: relative;
    border-radius: 1000px;
    background: ${sv.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 1s ${sv.curve}, height 1s ${sv.curve}, opacity 0.7s ${sv.curve},
      transform ${sv.transitionTime} ${sv.curve};

    > svg {
      width: 200px;
      display: none;
      transition: opacity 0.7s 0.5s ${sv.curve};
    }
  `,
  ready: css`
    opacity: 1;
    transform: scale(1);
  `,
  expanded: css`
    width: 150vw;
    height: 150vw;
    opacity: 0;
    transition: width 1s ${sv.curve}, height 1s ${sv.curve}, opacity 1s 2s ${sv.curve},
      transform ${sv.transitionTime} ${sv.curve};

    > svg {
      opacity: 0;
    }
  `,
  img: css`
    width: 100%;
  `,
};

const Loader = ({ onFinish }) => {
  const outlineRef = useRef();
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (outlineRef.current) {
      setReady(true);
      setTimeout(() => {
        document.getElementById('outline-svg').style.display = 'block';
        new Vivus('outline-svg', { animTimingFunction: Vivus.EASE }, () => {
          setExpanded(true);
          setTimeout(() => {
            onFinish();
          }, 3500);
        });
      }, 1000);
    }
  }, []);

  return (
    <div className={cx(styles.loader, { [styles.noBackground]: expanded })} id="__loader">
      <div className={cx(styles.container, { [styles.ready]: ready, [styles.expanded]: expanded })}>
        <Outline ref={outlineRef} img={logo} />
      </div>
    </div>
  );
};

export default Loader;
