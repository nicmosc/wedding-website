import FullPage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { css } from 'emotion';
import React from 'react';

import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import sv from '../utils/vars';

const styles = {
  intro: css`
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
};

const Index = () => {
  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection style={{ height: '100vh' }}>
          <div className={styles.intro}>
            <div className={styles.title}>
              <Title>Jemima & Nicolaos</Title>
              <Subtitle>Are getting married</Subtitle>
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
