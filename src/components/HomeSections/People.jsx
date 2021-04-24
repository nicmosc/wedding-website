import { css } from 'emotion';
import React from 'react';

import flowerBackground from '../../images/flower-background.png';
import amina from '../../images/people/amina.png';
import andrea from '../../images/people/andrea.png';
import gary from '../../images/people/gary.png';
import jeff from '../../images/people/jeff.png';
import jem from '../../images/people/jem.png';
import ling from '../../images/people/ling.png';
import nath from '../../images/people/nath.png';
import nic from '../../images/people/nic.png';
import ollie from '../../images/people/ollie.png';
import praj from '../../images/people/praj.png';
import { sv } from '../../utils';
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
    padding-top: calc(${sv.paddingLarge} * 3);
    flex: 1;
    min-height: 100vh;
    padding-bottom: calc(${sv.paddingLarge} * 6);
  `,
  row: css`
    display: flex;
    align-items: flex-start;
    margin-top: ${sv.marginLarge};
    padding-bottom: ${sv.paddingLarge};

    @media ${sv.screenM} {
      flex-direction: column;
      padding-bottom: 0;
      margin-top: 0;
      align-items: stretch;

      &:nth-of-type(4) {
        > div {
          flex-direction: row;
          [data-element='container'] {
            margin-right: ${sv.marginLarge};
            margin-left: 0;
          }

          &:nth-of-type(2) {
            flex-direction: row-reverse;
            [data-element='container'] {
              margin-left: ${sv.marginLarge};
              margin-right: 0;
            }
          }
        }
      }
    }
  `,
  person: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 calc(${sv.margin} * 2);

    @media ${sv.screenM} {
      flex: 1;
      flex-direction: row;
      margin: 0;
      margin-top: ${sv.marginLarge};

      &:nth-child(odd) {
        flex-direction: row-reverse;

        [data-element='container'] {
          margin-right: 0;
          margin-left: ${sv.marginLarge};
        }
      }
    }
  `,
  container: css`
    position: relative;
    height: 250px;
    width: 250px;
    border-radius: 1000px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-position: center;
    background-size: 290px;
    transition: ${sv.transition};

    > img {
      width: 250px;
      transform: translateY(10px);
    }

    &:hover {
      cursor: pointer;

      transform: scale(0.9);

      [data-element='overlay'] {
        background: transparent;
      }
    }

    @media ${sv.screenM} {
      height: 130px;
      width: 130px;
      margin-right: ${sv.marginLarge};

      > img {
        width: 100px;
      }
    }
  `,
  overlay: css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: white;
    transition: ${sv.transition};
  `,
  info: css`
    @media ${sv.screenM} {
      flex: 1;
      text-align: center;
    }
  `,
  title: css`
    font-family: ${sv.altFontFamily};
    font-size: 4.5em;
    margin-bottom: ${sv.margin};
    margin-top: ${sv.marginLarge};
    text-align: center;

    @media ${sv.screenM} {
      font-size: 3.8em;
    }
  `,
  nextSection: css`
    position: absolute;
    bottom: ${sv.margin};
    left: 50%;
    transform: translateX(-50%);
  `,
};

const Person = ({ image, label, title, background, style }) => {
  return (
    <div className={styles.person}>
      <div
        data-element="container"
        className={styles.container}
        // style={{ backgroundImage: `url(${background})` }}>
        style={{ backgroundColor: sv.pink }}>
        <div data-element="overlay" className={styles.overlay} />
        <img style={style} src={image} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <Subtitle style={{ textAlign: 'center' }}>{label}</Subtitle>
      </div>
    </div>
  );
};

const People = () => {
  return (
    <div className={styles.section}>
      <Subtitle>The wedding</Subtitle>
      <Title>Party</Title>
      <div className={styles.row}>
        <Person
          background={flowerBackground}
          image={jem}
          title="Jemima"
          label="Bride"
          style={{ transform: 'translateY(15px)' }}
        />
        <Person
          background={flowerBackground}
          image={nic}
          title="Nicolaos"
          label="Groom"
          style={{ transform: 'translateY(8px)' }}
        />
      </div>
      <div className={styles.row}>
        <Person
          background={flowerBackground}
          image={ling}
          title="Aislinn"
          label="Maid of honor"
          style={{ transform: 'translateY(20px)' }}
        />
        <Person
          background={flowerBackground}
          image={jeff}
          title="Geoffrey"
          label="Best man"
          style={{ transform: 'translateY(10px)' }}
        />
        <Person background={flowerBackground} image={nath} title="Nathalie" label="Bridesmaid" />
      </div>
      <div className={styles.row}>
        <Person
          background={flowerBackground}
          image={gary}
          title="Gary"
          label="Groomsman"
          style={{ transform: 'translateY(12px)' }}
        />
        <Person
          background={flowerBackground}
          image={andrea}
          title="Andrea"
          label="Bridesmaid"
          style={{ transform: 'translateY(13px)' }}
        />
        <Person
          background={flowerBackground}
          image={ollie}
          title="Ollie"
          label="Groomsman"
          style={{ transform: 'translateY(4px)' }}
        />
      </div>
      <div className={styles.row}>
        <Person
          background={flowerBackground}
          image={amina}
          title="Amina"
          label="Bridesmaid"
          style={{ transform: 'translateY(8px)' }}
        />
        <Person background={flowerBackground} image={praj} title="Praj" label="Groomsman" />
      </div>
      <div className={styles.nextSection}>
        <NextSectionTrigger>Anything else?</NextSectionTrigger>
      </div>
    </div>
  );
};

export default People;
