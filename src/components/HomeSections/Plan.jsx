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

    @media ${sv.screenS} {
      padding-top: calc(${sv.paddingLarge} * 2);
      padding-bottom: calc(${sv.paddingLarge} * 4);
    }
  `,
  timeline: css`
    margin-top: ${sv.marginLarge};
    display: flex;
    align-items: flex-start;
    position: relative;

    @media ${sv.screenS} {
      flex-direction: column;
      width: calc(100% - ${sv.paddingLarge} * 2);
    }
  `,
  horizontalLine: css`
    position: absolute;
    top: 130px;
    width: 100%;
    background: ${sv.neutral};
    height: 2px;

    @media ${sv.screenS} {
      height: 100%;
      width: 2px;
      top: 0;
      left: 50%;
      transform: translateX(50%);
    }
  `,
  column: css`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${sv.screenS} {
      position: relative;
      flex-direction: row;
      height: 150px;
      width: 100%;
      justify-content: space-between;
    }
  `,
  time: css``,
  iconWrapper: css`
    height: 70px;
    display: flex;
  `,
  icon: css`
    width: 70px;
    flex: 1;
  `,
  line: css`
    width: 2px;
    height: 25px;
    background: ${sv.neutral};

    @media ${sv.screenS} {
      height: 2px;
      width: 25px;
      position: absolute;
      left: calc(50% + 2px);
      top: 50%;
      transform: translate(-50%, -50%);
    }
  `,
  label: css`
    max-width: 150px;
    text-align: center;

    @media ${sv.screenS} {
      width: 35vw;
    }
  `,
  group: css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${sv.screenS} {
      margin-left: ${sv.margin};
    }
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
      <div className={styles.group}>
        <div className={styles.iconWrapper}>
          <img src={icon} className={styles.icon} />
        </div>
        <div className={styles.time}>
          <Subtitle>{time}</Subtitle>
        </div>
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
        <div className={styles.horizontalLine} />
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
