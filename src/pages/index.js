import FullPage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { css } from 'emotion';
import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { Intro } from '../components/HomeSections';
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
};

const Index = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.menu}>
        <BurgerMenu />
      </div>
      <FullPage>
        <FullPageSections>
          <FullpageSection style={{ height: '100vh' }}>
            <Intro />
          </FullpageSection>
          <FullpageSection style={{ height: '100vh' }}>Countdown</FullpageSection>
          <FullpageSection style={{ height: '100vh' }}>Location</FullpageSection>
          <FullpageSection style={{ height: '50vh' }}>People</FullpageSection>
          <FullpageSection style={{ height: '40vh' }}>Footer</FullpageSection>
        </FullPageSections>
      </FullPage>
    </div>
  );
};

export default Index;
