import { css, cx } from 'emotion';
import React from 'react';

import flower from '../../images/countdown-flower.png';
import { sv } from '../../utils';
import Countdown from '../Countdown';
import NextSectionTrigger from '../NextSectionTrigger';
import Subtitle from '../Subtitle';

const styles = {
  dateSection: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100vh;
  `,
  subtitle: css`
    margin-bottom: ${sv.marginLarge};
  `,
  title: css`
    font-size: 3em;
    text-transform: uppercase;
    color: ${sv.neutral};
    font-weight: 300;
    margin-top: 0;

    @media ${sv.screenS} {
      font-size: 2em;
    }
  `,
  group: css`
    display: flex;
    align-items: center;
    justify: center;
    margin-top: ${sv.margin};
  `,
  flower: css`
    width: 200px;

    @media ${sv.screenS} {
      width: 100px;
    }
  `,
  at: css`
    margin: 0 ${sv.margin};
  `,
  countdown: css`
    margin-top: calc(${sv.marginLarge} * 2);
    position: relative;

    @media ${sv.screenS} {
      margin-top: ${sv.marginLarge};
    }
  `,
  smallMargin: css`
    margin-top: ${sv.marginLarge};
  `,
  nextSection: css`
    position: absolute;
    bottom: ${sv.margin};
    left: 50%;
    transform: translateX(-50%);
  `,
  alreadyMarried: css`
    text-align: center;
    margin-bottom: calc(${sv.marginLarge} * 2);

    @media ${sv.screenS} {
      margin-bottom: ${sv.marginLarge};
    }
  `,
};

const WEDDING_DATE = new Date('2020-07-11');

const DateSection = () => {
  const alreadyMarried = WEDDING_DATE < new Date();
  return (
    <div className={styles.dateSection}>
      <div className={styles.subtitle}>
        {do {
          if (alreadyMarried) {
            <Subtitle>The wedding was held on</Subtitle>;
          } else {
            <Subtitle>The wedding will be held on</Subtitle>;
          }
        }}
      </div>
      <div className={styles.title}>July 11, 2020</div>
      <div className={styles.group}>
        <img className={styles.flower} src={flower} />
        <div className={styles.at}>
          <Subtitle>At</Subtitle>
        </div>
        <div className={styles.title}>2 PM</div>
      </div>
      <div className={cx(styles.countdown, { [styles.smallMargin]: alreadyMarried })}>
        {do {
          if (alreadyMarried) {
            <div className={styles.alreadyMarried}>
              <Subtitle>Married since</Subtitle>
            </div>;
          } else {
            <div className={styles.alreadyMarried}>
              <Subtitle>In</Subtitle>
            </div>;
          }
        }}
        <Countdown />
      </div>
      <div className={styles.nextSection}>
        <NextSectionTrigger>Where?</NextSectionTrigger>
      </div>
    </div>
  );
};

export default DateSection;
