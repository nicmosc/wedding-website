import { css } from 'emotion';
import React from 'react';

import { dance, glasses, heart, rings, truck } from '../../icons';
import { sv } from '../../utils';
import NextSectionTrigger from '../NextSectionTrigger';
import Subtitle from '../Subtitle';
import Title from '../Title';

const styles = {
  section: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100vh;
  `,
  timeline: css`
    margin-top: calc(${sv.marginLarge} * 4);
    display: flex;
    align-items: flex-start;
    position: relative;
  `,
  verticalLine: css`
    position: absolute;
    top: 130px;
    width: 100%;
    background: ${sv.neutral};
    height: 2px;
  `,
  column: css`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  time: css`
    margin-top: ${sv.margin};
  `,
  iconWrapper: css`
    height: 50px;
  `,
  icon: css`
    width: 70px;
  `,
  line: css`
    width: 2px;
    height: 25px;
    background: ${sv.neutral};
  `,
  label: css`
    max-width: 150px;
    text-align: center;
  `,
  nextSection: css`
    position: absolute;
    bottom: ${sv.margin};
    left: 50%;
    transform: translateX(-50%);
  `,
};

const Column = ({ time, label, icon }) => {
  return (
    <div className={styles.column}>
      <div className={styles.iconWrapper}>
        <img src={icon} className={styles.icon} />
      </div>
      <div className={styles.time}>
        <Subtitle>{time}</Subtitle>
      </div>
      <div className={styles.line} />
      <div className={styles.label}>
        <Subtitle style={{ color: sv.neutral }}>{label}</Subtitle>
      </div>
    </div>
  );
};

const Plan = () => {
  return (
    <div className={styles.section}>
      <Subtitle>The</Subtitle>
      <Title>Wedding</Title>
      <Subtitle>Day</Subtitle>
      <div className={styles.timeline}>
        <div className={styles.verticalLine} />
        <Column time="3 PM" label="Ceremony" icon={rings} />
        <Column time="4 PM" label="Drinks & photos" icon={glasses} />
        <Column time="7 PM" label="Dinner" icon={truck} />
        <Column time="9 PM" label="First dance & party" icon={dance} />
        <Column time="Forever" label="Happy times" icon={heart} />
      </div>
      <div className={styles.nextSection}>
        <NextSectionTrigger>Who will be there?</NextSectionTrigger>
      </div>
    </div>
  );
};

export default Plan;
