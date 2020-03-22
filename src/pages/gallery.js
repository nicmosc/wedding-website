import { css } from 'emotion';
// import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import BurgerMenu from '../components/BurgerMenu';
import NavMenu from '../components/NavMenu';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import leftFlower from '../images/intro-left-flower.png';
import { sv } from '../utils';

const styles = {
  pageWrapper: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: calc(${sv.paddingLarge} * 10);
    min-height: 100vh;
    padding-bottom: calc(${sv.paddingLarge} * 2);

    @media ${sv.screenS} {
      padding-top: calc(${sv.paddingLarge} * 5);
      padding-left: ${sv.padding};
      padding-right: ${sv.padding};
    }
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
    max-width: 50vw;
    display: flex;
    justify-content: flex-start;
    pointer-events: none;

    > img {
      height: 100%;
      object-fit: contain;
    }

    @media ${sv.screenS} {
      left: calc(${sv.marginLarge} * -1);
      top: calc(${sv.margin} * -1);
      height: 30vh;
    }
  `,
};

const Gallery = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Wrapper>
      <div className={styles.pageWrapper}>
        <NavMenu onClickClose={() => setMenuVisible(false)} visible={menuVisible} />
        <div className={styles.menu}>
          <BurgerMenu onClick={() => setMenuVisible(true)} />
        </div>
        <div className={styles.leftFlower}>
          <img src={leftFlower} />
        </div>
        <Title>Gallery</Title>
      </div>
    </Wrapper>
  );
};

export default Gallery;
