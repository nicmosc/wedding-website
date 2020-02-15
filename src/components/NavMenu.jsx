import { css, cx } from 'emotion';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import sv from '../utils/vars';

const styles = {
  menu: css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: ${sv.white};
    display: none;
    z-index: 9;
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

const NavMenu = ({ visible, onClickClose }) => {
  const [outletElement, setOutletElement] = useState(null);

  const handleClickClose = () => {
    setTimeout(() => {
      onClickClose();
    }, 1000);
  };

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
      <AniLink duration={2} cover to="/" direction="right" bg={sv.pink}>
        <div onClick={handleClickClose} className={styles.item}>
          <div className={styles.title}>Home</div>
        </div>
      </AniLink>
      <AniLink duration={2} cover to="/registry" direction="right" bg={sv.pink}>
        <div onClick={handleClickClose} className={styles.item}>
          <div className={styles.title}>Registry</div>
        </div>
      </AniLink>
      <AniLink duration={2} cover to="/faq" direction="right" bg={sv.pink}>
        <div onClick={handleClickClose} className={styles.item}>
          <div className={styles.title}>Faq</div>
        </div>
      </AniLink>
      <AniLink duration={2} cover to="/gallery" direction="right" bg={sv.pink}>
        <div onClick={handleClickClose} className={styles.item}>
          <div className={styles.title}>Gallery</div>
          <div className={styles.subtitle}>Coming soon</div>
        </div>
      </AniLink>
    </div>,
    document.getElementById('modals-outlet'),
  );
};

export default NavMenu;
