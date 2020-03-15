import { css } from 'emotion';
import React from 'react';

import leftFlower from '../../images/intro-left-flower.png';
import rightFlower from '../../images/intro-right-flower.png';
import { sv } from '../../utils';
import NextSectionTrigger from '../NextSectionTrigger';
import Subtitle from '../Subtitle';
import Title from '../Title';

const styles = {
  intro: css`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  `,
  title: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  rightFlower: css`
    position: absolute;
    right: calc(${sv.marginLarge} * -2);
    bottom: 0;
    z-index: 99;
    height: 70vh;
    display: flex;
    justify-content: flex-end;
    pointer-events: none;

    > img {
      height: 100%;
      object-fit: contain;
      transform: scaleX(-1);
    }

    @media ${sv.screenS} {
      right: calc(${sv.marginLarge} * -1);
      height: 35vh;
    }
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

    @media ${sv.screenS} {
      left: calc(${sv.marginLarge} * -1);
      top: calc(${sv.margin} * -1);
      height: 30vh;
    }
  `,
  nextSection: css`
    position: absolute;
    bottom: ${sv.marginLarge};
    left: 20%;
    z-index: 999;

    @media ${sv.screenS} {
      left: ${sv.marginLarge};
      bottom: ${sv.marginLarge};
    }
  `,
};

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.leftFlower}>
        <img src={leftFlower} />
      </div>
      <div className={styles.title}>
        <Title>Jemima & Nicolaos</Title>
        <Subtitle>Are getting married</Subtitle>
      </div>
      <div className={styles.rightFlower}>
        <img src={rightFlower} />
      </div>
      <div className={styles.nextSection}>
        <NextSectionTrigger>When?</NextSectionTrigger>
      </div>
    </div>
  );
};

export default Intro;
