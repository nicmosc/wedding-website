// import { Link } from "gatsby"
import Link, { TransitionPortal } from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Power1, TimelineMax } from 'gsap';
import React, { useRef } from 'react';

import Layout from '../components/_old/layout';
import SEO from '../components/_old/seo';

const IndexPage = () => {
  const transitionCover = useRef();
  const layoutContents = useRef();

  const verticalAnimation = ({ length }, direction) => {
    const directionTo = direction === 'up' ? '-100%' : '100%';
    const directionFrom = direction === 'up' ? '100%' : '-100%';

    // convert ms to s for gsap
    const seconds = length;

    return new TimelineMax()
      .set(transitionCover.current, { y: directionFrom })
      .to(transitionCover.current, seconds / 2, {
        y: '0%',
        ease: Power1.easeInOut,
      })
      .set(layoutContents.current, { opacity: 0 })
      .to(transitionCover.current, seconds / 2, {
        y: directionTo,
        ease: Power1.easeIn,
      });
  };

  return (
    <div ref={layoutContents}>
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>{/* <Image /> */}</div>
        <Link
          exit={{
            length: 1.2,
            trigger: ({ exit }) => verticalAnimation(exit, 'up'),
          }}
          entry={{
            delay: 0.5,
          }}
          to="/page-2/">
          Go to page 2
        </Link>
        <br />
        <AniLink cover to="/page-2" direction="right" bg="#ff0000">
          Go to page 2 with a cover right
        </AniLink>
        <TransitionPortal>
          <div
            ref={transitionCover}
            style={{
              position: 'fixed',
              background: '#4b2571',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              transform: 'translateY(100%)',
            }}
          />
        </TransitionPortal>
      </Layout>
    </div>
  );
};

export default IndexPage;
