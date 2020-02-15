import { css, cx } from 'emotion';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import sv from '../utils/vars';

const styles = {
  menu: css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: ${sv.white};
    display: none;
    z-index: 99999;
    pointer-events: auto;
    overscroll-behavior: none;
    flex-direction: column;
    justify-content: center;
  `,
  visible: css`
    display: flex;
  `,
  item: css`
    position: relative;
    width: 100%;
    padding: calc(${sv.paddingLarge} * 2) 0;
    background: ${sv.backgroundColor};

    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100vw;
      opacity: 1;
      background: ${sv.white};
      transition: opacity ${sv.transitionTime} ease-in-out;
    }

    * {
      z-index: 999;
      position: relative;
    }

    &:hover {
      cursor: pointer;

      &::after {
        width: 0;
        opacity: 0;
        transition: all 1s ease-in-out;
      }

      * {
        color: ${sv.neutral};
      }
    }
  `,
  title: css`
    font-size: 2.5em;
    color: ${sv.neutralLight};
    text-align: center;
    text-transform: uppercase;
    transition: ${sv.transition};
  `,
  subtitle: css`
    margin-top: ${sv.margin};
    font-family: ${sv.altFontFamily};
    color: ${sv.neutralLight};
    text-align: center;
    font-size: 3.5em;
    transition: ${sv.transition};
  `,
};

const NavMenu = ({ visible }) => {
  const [outletElement, setOutletElement] = useState(null);

  useEffect(() => {
    if (!document.getElementById('modals-outlet')) {
      const modalsOutlet = document.createElement('div');
      modalsOutlet.id = 'modals-outlet';
      document.body.appendChild(modalsOutlet);
      setOutletElement(modalsOutlet);
    } else {
      setOutletElement(document.getElementById('modals-outlet'));
    }

    return () => {
      if (outletElement) {
        document.body.removeChild(outletElement);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      // if (screenSize <= ScreenSizes.L) {
      //   document.body.style.pointerEvents = 'none';
      //   document.body.parentElement.style.position = 'fixed';
      // }
    } else {
      document.body.style.overflow = 'initial';
      document.body.style.pointerEvents = 'auto';
      document.body.parentElement.style.position = '';
    }
  }, [visible]);

  if (!outletElement) return '';

  return ReactDOM.createPortal(
    <div className={cx(styles.menu, { [styles.visible]: visible })}>
      <div className={styles.item}>
        <div className={styles.title}>Home</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Registry</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>FAQ</div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>Gallery</div>
        <div className={styles.subtitle}>Coming soon</div>
      </div>
    </div>,
    document.getElementById('modals-outlet'),
  );
};

export default NavMenu;
