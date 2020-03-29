import { css, cx } from 'emotion';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { sv } from '../utils';
import Icon from './Icon';
import Link from './Link';

const styles = {
  menu: css`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: ${sv.white};
    z-index: -99999;
    pointer-events: auto;
    overscroll-behavior: none;
    flex-direction: column;
    justify-content: center;
    pointer-events: none;
    transform: translateX(100%);
    transition: transform 0.8s ${sv.curve};
  `,
  visible: css`
    opacity: 1;
    pointer-events: auto;
    z-index: 99;
    transform: translateX(0);
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
        transition: all 1s ${sv.curve};
      }

      * {
        color: ${sv.neutral};
      }
    }

    @media ${sv.screenM} {
      padding: calc(${sv.padding} * 1.5) 0;
    }
  `,
  title: css`
    font-size: 2.5em;
    color: ${sv.neutralLight};
    text-align: center;
    text-transform: uppercase;
    transition: ${sv.transition};

    @media ${sv.screenM} {
      font-size: 1.5em;
    }
  `,
  subtitle: css`
    margin-top: ${sv.margin};
    font-family: ${sv.altFontFamily};
    color: ${sv.neutralLight};
    text-align: center;
    font-size: 3.5em;
    transition: ${sv.transition};

    @media ${sv.screenM} {
      font-size: 2.5em;
    }
  `,
  close: css`
    position: absolute;
    top: ${sv.marginLarge};
    right: ${sv.marginLarge};
    color: ${sv.neutralLight};
    transition: ${sv.transition};
    z-index: 9999;

    &:hover {
      cursor: pointer;
      color: ${sv.neutral};
    }
  `,
};

const NavMenu = ({ visible, onClickClose }) => {
  const [outletElement, setOutletElement] = useState(null);
  const [zIndex, setZIndex] = useState(-9999);

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            kadologLink
          }
        }
      }
    `,
  );

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
      setZIndex(99);
      // if (screenMize <= ScreenSizes.L) {
      //   document.body.style.pointerEvents = 'none';
      //   document.body.parentElement.style.position = 'fixed';
      // }
    } else {
      document.body.style.overflow = 'initial';
      document.body.style.pointerEvents = 'auto';
      document.body.parentElement.style.position = '';

      setTimeout(() => {
        setZIndex(-9999);
      }, 1000);
    }
  }, [visible]);

  if (!outletElement) return '';

  return ReactDOM.createPortal(
    <div className={cx(styles.menu, { [styles.visible]: visible })} style={{ zIndex }}>
      <div className={styles.close} onClick={onClickClose}>
        <Icon name="x" />
      </div>
      <Link to="/">
        <div onClick={handleClickClose} className={styles.item}>
          <div className={styles.title}>Home</div>
        </div>
      </Link>
      <Link to="/faq">
        <div onClick={handleClickClose} className={styles.item}>
          <div className={styles.title}>Faq</div>
        </div>
      </Link>
      <Link to="/gallery">
        <div onClick={handleClickClose} className={styles.item}>
          <div className={styles.title}>Gallery</div>
          <div className={styles.subtitle}>Coming soon</div>
        </div>
      </Link>
      <Link to={data.site.siteMetadata.kadologLink} external>
        <div onClick={handleClickClose} className={styles.item}>
          <div className={styles.title}>Registry</div>
          <div className={styles.subtitle}>kadolog.com</div>
        </div>
      </Link>
    </div>,
    document.getElementById('modals-outlet'),
  );
};

export default NavMenu;
