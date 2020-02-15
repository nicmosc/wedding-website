import { css } from 'emotion';
import React, { useState } from 'react';

import BurgerMenu from '../components/BurgerMenu';
import NavMenu from '../components/NavMenu';
import Title from '../components/Title';
import leftFlower from '../images/intro-left-flower.png';
import sv from '../utils/vars';

const styles = {
  pageWrapper: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: calc(${sv.paddingLarge} * 10);
    min-height: 100vh;
    padding-bottom: calc(${sv.paddingLarge} * 6);
  `,
  menu: css`
    position: fixed;
    top: ${sv.marginLarge};
    right: ${sv.marginLarge};
    z-index: 9;
  `,
  leftFlower: css`
    position: absolute;
    top: calc(${sv.marginLarge} * -2);
    left: calc(${sv.marginLarge} * -1);
    z-index: 99;
    height: 60vh;
    display: flex;
    justify-content: flex-start;
    pointer-events: none;

    > img {
      height: 100%;
      object-fit: contain;
    }
  `,
};

const FAQ = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className={styles.pageWrapper}>
      <NavMenu onClickClose={() => setMenuVisible(false)} visible={menuVisible} />
      <div className={styles.menu}>
        <BurgerMenu onClick={() => setMenuVisible(true)} />
      </div>
      <Title>FAQ</Title>
      <div className={styles.leftFlower}>
        <img src={leftFlower} />
      </div>
    </div>
  );
};

export default FAQ;
