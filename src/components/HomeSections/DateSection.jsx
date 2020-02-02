import { css, cx } from 'emotion';
import React from 'react';

import flower from '../../images/countdown-flower.png';
import sv from '../../utils/vars';
import Countdown from '../Countdown';
import NextSectionTrigger from '../NextSectionTrigger';
import Subtitle from '../Subtitle';

const styles = {
  dateSection: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
  `,
  title: css`
    font-size: 3em;
    text-transform: uppercase;
    color: ${sv.neutral};
    font-weight: 300;
    margin-top: ${sv.marginLarge};
  `,
  group: css`
    display: flex;
    align-items: center;
    justify: center;
    margin-top: ${sv.margin};
  `,
  flower: css`
    width: 200px;
  `,
  at: css`
    margin: 0 ${sv.margin};
  `,
  countdown: css`
    margin-top: calc(${sv.marginLarge} * 3);
    position: relative;
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
  `,
};

const WEDDING_DATE = new Date('2020-07-11');

const DateSection = () => {
  const alreadyMarried = WEDDING_DATE < new Date();
  return (
    <div className={styles.dateSection}>
      {do {
        if (alreadyMarried) {
          <Subtitle>The wedding was held on</Subtitle>;
        } else {
          <Subtitle>The wedding will be held on</Subtitle>;
        }
      }}
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
