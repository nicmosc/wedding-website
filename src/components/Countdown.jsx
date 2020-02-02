import { css } from 'emotion';
import React from 'react';

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

const WEDDING_DATE = '2020-07-11';

const Item = ({ time, label }) => {
  return (
    <div className={styles.item}>
      <div className={styles.bigLabel}>{time}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

const Countdown = () => {
  return (
    <div className={styles.countdown}>
      <Item time="100" label="days" />
      <div className={styles.bigLabel}>:</div>
      <Item time="03" label="hours" />
      <div className={styles.bigLabel}>:</div>
      <Item time="15" label="minutes" />
      <div className={styles.bigLabel}>:</div>
      <Item time="13" label="secs" />
    </div>
  );
};

export default Countdown;
