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
  `,
  map: css`
    height: 40vh;
    width: 100%;
    margin-top: calc(${sv.marginLarge} * 2);
    position: relative;
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
  `,
};

const Location = () => {
  return (
    <div className={styles.section}>
      <Subtitle>You will spend the day with us at</Subtitle>
      <Title>Loonbeek Castle</Title>
      <Subtitle style={{ textTransform: 'none' }}>
        Sint-Jansbergsteenweg 24-26, 3040 Loonbeek
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
