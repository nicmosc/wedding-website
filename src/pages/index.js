import FullPage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { css } from 'emotion';
import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import FloatingDate from '../components/FloatingDate';
import { DateSection, Intro } from '../components/HomeSections';
import sv from '../utils/vars';

const styles = {
  pageWrapper: css`
    position: relative;
  `,
  menu: css`
    position: fixed;
    top: ${sv.marginLarge};
    right: ${sv.marginLarge};
    z-index: 9;
  `,
  date: css`
    position: fixed;
    bottom: ${sv.marginLarge};
    left: ${sv.marginLarge};
    transform-origin: left;
    transform: rotateZ(-90deg) translateY(50%);
    z-index: 9;
  `,
};

const Index = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.menu}>
        <BurgerMenu />
      </div>
      <div className={styles.date}>
        <FloatingDate />
      </div>
      <FullPage>
        <FullPageSections>
          <FullpageSection style={{ height: '100vh' }}>
            <Intro />
          </FullpageSection>
          <FullpageSection style={{ height: '100vh' }}>
            <DateSection />
          </FullpageSection>
          <FullpageSection style={{ height: '100vh' }}>Location</FullpageSection>
          <FullpageSection style={{ height: '50vh' }}>People</FullpageSection>
          <FullpageSection style={{ height: '40vh' }}>Footer</FullpageSection>
        </FullPageSections>
      </FullPage>
    </div>
  );
};

export default Index;
