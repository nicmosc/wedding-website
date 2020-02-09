import loadable from '@loadable/component';
import { css } from 'emotion';
import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import FloatingDate from '../components/FloatingDate';
import { DateSection, Footer, Intro, Location, People, Plan } from '../components/HomeSections';
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
  flexSection: css`
    .fp-tableCell {
      display: flex;
    }
  `,
};

const anchors = ['intro', 'date', 'location', 'timeline', 'people', 'footer'];

const ReactFullpage =
  process.env.NODE_ENV === 'development'
    ? require('@fullpage/react-fullpage').default
    : loadable(() => import('@fullpage/react-fullpage'));

const Index = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.menu}>
        <BurgerMenu />
      </div>
      <div className={styles.date}>
        <FloatingDate />
      </div>
      <ReactFullpage
        scrollOverflow
        licenseKey="ok"
        anchors={anchors}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section fp-noscroll">
              <Intro />
            </div>
            <div className="section fp-noscroll">
              <DateSection />
            </div>
            <div className={`section fp-noscroll ${styles.flexSection}`}>
              <Location />
            </div>
            <div className="section fp-noscroll">
              <Plan />
            </div>
            <div className="section">
              <People />
            </div>
            <div className="section fp-auto-height">
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Index;
