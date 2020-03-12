import loadable from '@loadable/component';
import { css } from 'emotion';
import React, { useState } from 'react';

import BurgerMenu from '../components/BurgerMenu';
import FloatingDate from '../components/FloatingDate';
import { DateSection, Footer, Intro, Location, People, Plan } from '../components/HomeSections';
import Loader from '../components/Loader';
import NavMenu from '../components/NavMenu';
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
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className={styles.pageWrapper}>
      <NavMenu onClickClose={() => setMenuVisible(false)} visible={menuVisible} />
      <div className={styles.menu}>
        <BurgerMenu onClick={() => setMenuVisible(true)} />
      </div>
      <div className={styles.date}>
        <FloatingDate />
      </div>
      <ReactFullpage
        scrollingSpeed={1000}
        easingcss3="ease-in-out"
        scrollOverflow
        licenseKey="kqT789K@a0"
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
