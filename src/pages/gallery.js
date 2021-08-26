import { css } from 'emotion';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import BurgerMenu from '../components/BurgerMenu';
import Link from '../components/Link';
import NavMenu from '../components/NavMenu';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import leftFlower from '../images/intro-left-flower.png';
import { sv } from '../utils';

const styles = {
  pageWrapper: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: calc(${sv.paddingLarge} * 10);
    min-height: 100vh;
    padding-bottom: calc(${sv.paddingLarge} * 2);

    @media ${sv.screenM} {
      padding-top: calc(${sv.paddingLarge} * 5);
      padding-left: ${sv.padding};
      padding-right: ${sv.padding};
    }
  `,
  menu: css`
    position: fixed;
    top: ${sv.marginLarge};
    right: ${sv.marginLarge};
    z-index: 9;
  `,
  leftFlower: css`
    position: absolute;
    top: calc(${sv.marginLarge} * -2);
    left: calc(${sv.marginLarge} * -1);
    z-index: 99;
    height: 60vh;
    max-width: 50vw;
    display: flex;
    justify-content: flex-start;
    pointer-events: none;

    > img {
      height: 100%;
      object-fit: contain;
    }

    @media ${sv.screenM} {
      left: calc(${sv.marginLarge} * -1);
      top: calc(${sv.margin} * -1);
      height: 30vh;
    }
  `,
};

const Gallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            pictime1
            pictime2
            pictime3
            video
          }
        }
      }
    `,
  );

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Wrapper>
      <div className={styles.pageWrapper}>
        <NavMenu onClickClose={() => setMenuVisible(false)} visible={menuVisible} />
        <div className={styles.menu}>
          <BurgerMenu onClick={() => setMenuVisible(true)} />
        </div>
        <div className={styles.leftFlower}>
          <img src={leftFlower} />
        </div>
        <Title>Gallery</Title>
        <Subtitle>Wedding video</Subtitle>
        <div style={{ marginTop: sv.marginSmall }} />
        <Link to={data.site.siteMetadata.video} external>
          Ceremony and Party (2021)
        </Link>
        <div style={{ marginTop: sv.marginLarge }} />
        <Subtitle>Wedding photos</Subtitle>
        <div style={{ marginTop: sv.marginSmall }} />
        <Link to={data.site.siteMetadata.pictime1} external>
          Ceremony and Party (2021)
        </Link>
        <div style={{ marginTop: sv.marginSmall }} />
        <Link to={data.site.siteMetadata.cheesebox} external>
          Photobooth (2021)
        </Link>
        {/* <div style={{ marginTop: sv.marginLarge }} />
        <Link to={data.site.siteMetadata.pictime2} external>
          Engagement photos (2021)
        </Link> */}
        <div style={{ marginTop: sv.marginLarge }} />
        <Link to={data.site.siteMetadata.pictime3} external>
          Civil wedding and Reception (2020)
        </Link>
        <div style={{ marginTop: sv.marginLarge }} />
        <Subtitle>Access</Subtitle>
        <span style={{ fontSize: '0.8em' }}>
          Username: jemima_tallulah_nolan@hotmail.com
          <br />
          Password: nicfoundajem
          <br />
          Photobooth password: 202107JENI
        </span>
      </div>
    </Wrapper>
  );
};

export default Gallery;
