import { css } from 'emotion';
import React, { useState } from 'react';

import BurgerMenu from '../components/BurgerMenu';
import NavMenu from '../components/NavMenu';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import { car, gift, hanger, hat, hotel, map, plane, question } from '../icons';
import leftFlower from '../images/intro-left-flower.png';
import sv from '../utils/vars';

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
    display: flex;
    justify-content: flex-start;
    pointer-events: none;

    > img {
      height: 100%;
      object-fit: contain;
    }
  `,
  items: css`
    width: 100%;
    max-width: 1000px;
    margin-top: calc(${sv.marginLarge} * 2);
  `,
  item: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: calc(${sv.marginLarge} * 2);

    &:nth-child(even) {
      [data-element='icon'] {
        left: 0;
        right: calc(${sv.margin} * -1);
        transform: translate(100%, -50%);
      }
    }
  `,
  question: css`
    position: relative;
    text-align: center;
    display: inline-block;
  `,
  icon: css`
    display: flex;
    align-items: center;
    position: absolute;
    left: calc(${sv.margin} * -1);
    top: 50%;
    transform: translate(-100%, -50%);
  `,
  answer: css`
    margin-top: ${sv.margin};
    text-align: center;
    font-size: 0.9em;
    color: ${sv.neutral};
  `,
};

const items = [
  {
    q: 'When should I arrive in Brussels?',
    a:
      'You can arrive the morning of the wedding, just keep in mind that it takes around 1h to get from Zaventem Airport to the venue!',
    icon: plane,
  },
  {
    q: 'What should I wear?',
    a:
      'You can arrive the morning of the wedding, just keep in mind that it takes around 1h to get from Zaventem Airport to the venue!',
    icon: hanger,
  },
  {
    q: 'Does your wedding have a theme?',
    a:
      'You can arrive the morning of the wedding, just keep in mind that it takes around 1h to get from Zaventem Airport to the venue!',
    icon: hat,
  },
  {
    q: 'Where will the ceremony and reception take place?',
    a:
      'You can arrive the morning of the wedding, just keep in mind that it takes around 1h to get from Zaventem Airport to the venue!',
    icon: map,
  },
  {
    q: 'If i come by car where can i park?',
    a:
      'You can arrive the morning of the wedding, just keep in mind that it takes around 1h to get from Zaventem Airport to the venue!',
    icon: car,
  },
  {
    q: 'Any hotels you recommend near the venue?',
    a:
      'You can arrive the morning of the wedding, just keep in mind that it takes around 1h to get from Zaventem Airport to the venue!',
    icon: hotel,
  },
  {
    q: `What's on your registry?`,
    a:
      'You can arrive the morning of the wedding, just keep in mind that it takes around 1h to get from Zaventem Airport to the venue!',
    icon: gift,
  },
  {
    q: `I'm still not sure about some things, who should I contact?`,
    a:
      'You can arrive the morning of the wedding, just keep in mind that it takes around 1h to get from Zaventem Airport to the venue!',
    icon: question,
  },
];

const FAQ = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className={styles.pageWrapper}>
      <NavMenu onClickClose={() => setMenuVisible(false)} visible={menuVisible} />
      <div className={styles.menu}>
        <BurgerMenu onClick={() => setMenuVisible(true)} />
      </div>
      <div className={styles.leftFlower}>
        <img src={leftFlower} />
      </div>
      <Title>FAQ</Title>
      <div className={styles.items}>
        {items.map((item, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.question}>
              <Subtitle>{item.q}</Subtitle>
              <div data-element="icon" className={styles.icon}>
                <img src={item.icon} />
              </div>
            </div>
            <div className={styles.answer}>{item.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
