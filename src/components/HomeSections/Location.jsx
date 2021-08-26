import { css } from 'emotion';
import React from 'react';

import flower from '../../images/map-flower.png';
import { sv } from '../../utils';
import NextSectionTrigger from '../NextSectionTrigger';
import Subtitle from '../Subtitle';
import Title from '../Title';

const styles = {
  section: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-top: calc(${sv.paddingLarge} * 3);

    @media ${sv.screenM} {
      padding-right: ${sv.marginSmall};
      padding-left: ${sv.marginSmall};
    }
  `,
  map: css`
    height: 40vh;
    width: 100%;
    margin-top: calc(${sv.marginLarge} * 2);
    position: relative;

    @media ${sv.screenM} {
      margin-top: ${sv.margin};
      height: 35vh;
    }
  `,
  nextSection: css`
    position: absolute;
    bottom: ${sv.margin};
    left: 50%;
    transform: translateX(-50%);
  `,
  flower: css`
    position: absolute;
    top: calc(${sv.marginLarge} * -2);
    right: calc(${sv.marginLarge} * -1);
    width: 400px;
    pointer-events: none;

    @media ${sv.screenM} {
      width: 150px;
      top: calc(${sv.margin} * -1);
      right: calc(${sv.margin} * -1);
    }
  `,
  description: css`
    @media ${sv.screenM} {
      font-size: 0.8em;
    }
  `,
  title: css`
    @media ${sv.screenM} {
      font-size: 0.8em;
    }
  `,
};

const Location = () => {
  return (
    <div className={styles.section}>
      <Subtitle>You will spend the day with us at</Subtitle>
      <div className={styles.title}>
        <Title>Loonbeek Estate</Title>
      </div>
      <Subtitle style={{ textTransform: 'none' }}>
        <span className={styles.description}>Sint-Jansbergsteenweg 24-26, 3040 Loonbeek</span>
      </Subtitle>
      <div className={styles.map}>
        <img src={flower} className={styles.flower} />
        <iframe
          scrolling="no"
          src="https://snazzymaps.com/embed/210943"
          width="100%"
          height="100%"
          style={{ border: 'none' }}></iframe>
      </div>
      <div className={styles.nextSection}>
        <NextSectionTrigger>What's the plan?</NextSectionTrigger>
      </div>
    </div>
  );
};

export default Location;
