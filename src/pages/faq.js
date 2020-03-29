import { css } from 'emotion';
import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment, useState } from 'react';

import BurgerMenu from '../components/BurgerMenu';
import Link from '../components/Link';
import NavMenu from '../components/NavMenu';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import { car, gift, hanger, hat, hotel, map, plane, question } from '../icons';
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
  items: css`
    width: 100%;
    max-width: 1000px;
    margin-top: calc(${sv.marginLarge} * 2);

    @media ${sv.screenM} {
      margin-top: ${sv.marginLarge};
    }
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

    @media ${sv.screenM} {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  `,
  icon: css`
    display: flex;
    align-items: center;
    position: absolute;
    left: calc(${sv.margin} * -1);
    top: 50%;
    transform: translate(-100%, -50%);

    @media ${sv.screenM} {
      position: relative;
      transform: none !important;
      left: 0;
      top: 0;
      margin-bottom: ${sv.marginSmall};
    }
  `,
  answer: css`
    margin-top: ${sv.margin};
    text-align: center;
    font-size: 0.9em;
    color: ${sv.neutral};

    @media ${sv.screenM} {
      font-size: 0.8em;
      line-height: 1.6em;
    }
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
    a: `Since the wedding will be in the summer, people should be comfortable if it's warm, so smart casual is the dress code. Ties are optional for men, and women can wear a touch of MISSING`,
    icon: hanger,
  },
  {
    q: 'Does your wedding have a theme?',
    a:
      'There is no particular theme, except colors are mostly light, pastel, composed of pink, white and grey. Oh and it will be outside.',
    icon: hat,
  },
  {
    q: 'Where will the ceremony and reception take place?',
    a:
      'Both ceremony and reception will take place at the same venue, the Loonbeek Castle, Sint-Jansbergsteenweg 24-26, 3040 Loonbeek',
    icon: map,
  },
  {
    q: 'If i come by car where can i park?',
    a: `We will reserve parking which is right in front of the venue, there should be enough space for everyone, so you don't need to worry.`,
    icon: car,
  },
  {
    q: 'Any hotels you recommend near the venue?',
    a: `There are many hotels available in Brussels, which is 20 minutes away from the venue. However there are some hotels near the venue as well. One we recommend is the B&B Baron's House`,
    icon: hotel,
  },
  {
    q: `What's on your registry?`,
    a: `You can find out in the Registry page by following this link: `,
    link: true,
    icon: gift,
  },
  {
    q: `I'm still not sure about some things, who should I contact?`,
    a:
      'For anything before the wedding day, you can contact us directly. During the day, you can ask Aislinn or Geoffrey',
    icon: question,
  },
];

const FAQ = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            kadologLink
          }
        }
      }
    `,
  );

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
              <div className={styles.answer}>
                {do {
                  if (item.link) {
                    <Fragment>
                      <span>{item.a}</span>
                      <Link external to={data.site.siteMetadata.kadologLink}>
                        kadolog.com
                      </Link>
                    </Fragment>;
                  } else {
                    item.a;
                  }
                }}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FAQ;
