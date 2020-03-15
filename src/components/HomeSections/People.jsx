import { css } from 'emotion';
import React from 'react';

import flowerBackground from '../../images/flower-background.png';
import placeholder from '../../images/placeholder.png';
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
  `,
  person: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 calc(${sv.margin} * 2);
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
      width: 180px;
      transform: translateY(10px);
    }

    &:hover {
      cursor: pointer;

      transform: scale(0.9);

      [data-element='overlay'] {
        background: transparent;
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
  title: css`
    font-family: ${sv.altFontFamily};
    font-size: 4.5em;
    margin-bottom: ${sv.margin};
    margin-top: ${sv.marginLarge};
  `,
  nextSection: css`
    position: absolute;
    bottom: ${sv.margin};
    left: 50%;
    transform: translateX(-50%);
  `,
};

const Person = ({ image, label, title, background }) => {
  return (
    <div className={styles.person}>
      <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
        <div data-element="overlay" className={styles.overlay} />
        <img src={image} />
      </div>
      <div className={styles.title}>{title}</div>
      <Subtitle>{label}</Subtitle>
    </div>
  );
};

const People = () => {
  return (
    <div className={styles.section}>
      <Subtitle>The wedding</Subtitle>
      <Title>Party</Title>
      <div className={styles.row}>
        <Person background={flowerBackground} image={placeholder} title="Jemima" label="Bride" />
        <Person background={flowerBackground} image={placeholder} title="Nicolaos" label="Groom" />
      </div>
      <div className={styles.row}>
        <Person
          background={flowerBackground}
          image={placeholder}
          title="Geoffrey"
          label="Best man"
        />
        <Person
          background={flowerBackground}
          image={placeholder}
          title="Aislinn"
          label="Maid of honor"
        />
        <Person background={flowerBackground} image={placeholder} title="Ollie" label="Groomsman" />
      </div>
      <div className={styles.row}>
        <Person
          background={flowerBackground}
          image={placeholder}
          title="Nathalie"
          label="Bridesmaid"
        />
        <Person background={flowerBackground} image={placeholder} title="Gary" label="Groomsman" />
        <Person
          background={flowerBackground}
          image={placeholder}
          title="Andrea"
          label="Bridesmaid"
        />
      </div>
      <div className={styles.row}>
        <Person
          background={flowerBackground}
          image={placeholder}
          title="Amina"
          label="Bridesmaid"
        />
        <Person background={flowerBackground} image={placeholder} title="Praj" label="Groomsman" />
      </div>
      <div className={styles.nextSection}>
        <NextSectionTrigger>Anything else?</NextSectionTrigger>
      </div>
    </div>
  );
};

export default People;
