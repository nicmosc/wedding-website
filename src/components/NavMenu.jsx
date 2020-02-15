import { css } from 'emotion';
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
    display: flex;
    z-index: 99999;
    pointer-events: auto;
    overscroll-behavior: none;
    flex-direction: column;
    justify-content: center;
  `,
  item: css`
    width: 100%;
    padding: ${sv.paddingLarge};
    margin: calc(${sv.marginLarge}) 0;
  `,
  title: css`
    font-size: 2.5em;
    color: ${sv.neutralLight};
    text-align: center;
    text-transform: uppercase;
  `,
  subtitle: css`
    margin-top: ${sv.margin};
    font-family: ${sv.altFontFamily};
    color: ${sv.neutralLight};
    text-align: center;
    font-size: 3.5em;
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
    <div className={styles.menu}>
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
