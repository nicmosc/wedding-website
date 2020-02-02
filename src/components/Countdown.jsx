import { css } from 'emotion';
import React, { useState } from 'react';

import { useInterval } from '../utils';
import sv from '../utils/vars';

const styles = {
  countdown: css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
  `,
  item: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  bigLabel: css`
    font-size: 5em;
    text-transform: uppercase;
    color: ${sv.neutral};
    font-weight: 300;
    margin: 0 ${sv.marginSmall};
  `,
  label: css`
    font-size: 3.5em;
    font-family: ${sv.altFontFamily};
    color: ${sv.neutral};
    margin-top: calc(${sv.margin} * 2);
  `,
};

const WEDDING_DATE = new Date('2020-07-11 14:00');

const Item = ({ time, label }) => {
  return (
    <div className={styles.item}>
      <div className={styles.bigLabel}>{time}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

const Countdown = () => {
  const [difference, setDifference] = useState(+WEDDING_DATE - +new Date());

  useInterval(() => {
    setDifference(+WEDDING_DATE - +new Date());
  }, 1000);

  const parts = {
    days: Math.abs(Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: Math.abs(Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: Math.abs(Math.floor((difference / 1000 / 60) % 60)),
    seconds: Math.abs(Math.floor((difference / 1000) % 60)),
  };

  return (
    <div className={styles.countdown}>
      <Item time={parts.days} label="days" />
      <div className={styles.bigLabel}>:</div>
      <Item time={parts.hours} label="hours" />
      <div className={styles.bigLabel}>:</div>
      <Item time={parts.minutes} label="minutes" />
      <div className={styles.bigLabel}>:</div>
      <Item time={parts.seconds} label="secs" />
    </div>
  );
};

export default Countdown;
