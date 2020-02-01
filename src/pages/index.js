import FullPage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { css } from 'emotion';
import React from 'react';

import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import leftFlower from '../images/intro-left-flower.png';
import rightFlower from '../images/intro-right-flower.png';
import sv from '../utils/vars';

const styles = {
  intro: css`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  `,
};

const Index = () => {
  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection style={{ height: '100vh' }}>
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
          </div>
        </FullpageSection>
        <FullpageSection style={{ height: '100vh' }}>Countdown</FullpageSection>
        <FullpageSection style={{ height: '100vh' }}>Location</FullpageSection>
        <FullpageSection style={{ height: '50vh' }}>People</FullpageSection>
        <FullpageSection style={{ height: '40vh' }}>Footer</FullpageSection>
      </FullPageSections>
    </FullPage>
  );
};

export default Index;
