import { css } from 'emotion';
import React from 'react';

import rightFlower from '../../images/intro-right-flower.png';
import sv from '../../utils/vars';
import Link from '../Link';
import NextSectionTrigger from '../NextSectionTrigger';
import Subtitle from '../Subtitle';
import Title from '../Title';

const styles = {
  section: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 400px;
    padding-top: calc(${sv.paddingLarge} * 4);
  `,
  subtitle: css`
    margin-top: ${sv.marginLarge};
  `,
  links: css`
    display: flex;
    margin-top: ${sv.marginLarge};
  `,
  link: css`
    display: inline-block;
    margin: 0 ${sv.marginLarge};
    font-family: ${sv.defaultFontFamily};
    font-size: 1em;
    color: ${sv.neutral};
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }
  `,
  flower: css`
    position: absolute;
    left: calc(${sv.marginLarge} * -2);
    bottom: 0;
    z-index: 99;
    height: 70vh;
    display: flex;
    justify-content: flex-start;
    pointer-events: none;

    > img {
      height: 100%;
      object-fit: contain;
    }
  `,
  toTop: css`
    position: absolute;
    bottom: ${sv.marginLarge};
    right: 20%;
    z-index: 999;
  `,
};

const Footer = () => {
  return (
    <div className={styles.section}>
      <Title>See you there!</Title>
      <div className={styles.subtitle}>
        <Subtitle>For more details follow the links below:</Subtitle>
      </div>
      <div className={styles.links}>
        <Link to="/registry">
          <div className={styles.link}>Registry</div>
        </Link>

        <Link to="/faq">
          <div className={styles.link}>faq</div>
        </Link>
        <Link to="/gallery">
          <div className={styles.link}>Gallery</div>
        </Link>
      </div>
      <div className={styles.flower}>
        <img src={rightFlower} />
      </div>
      <div className={styles.toTop}>
        <NextSectionTrigger onClick={() => window.fullpage_api.moveTo('intro')}>
          Back to top
        </NextSectionTrigger>
      </div>
    </div>
  );
};

export default Footer;
