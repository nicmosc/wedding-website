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
      'From Zaventem airport, it’s about a 30 minute drive to the venue. However, it’s up to you to decide when you want to arrive. We suggest arriving the day before or the morning of the wedding. You can also take a few days and visit Brussels and Leuven which are very close to each other.',
    icon: plane,
  },
  {
    q: 'What should I wear?',
    a: `The wedding is taking place during the summer, and we are hoping for warm weather. The dress code is Smart Casual, and ties are optional for men. We will have heel stoppers available for anyone wearing heels, so that you don’t sink into the grass.`,
    icon: hanger,
  },
  {
    q: 'Does your wedding have a theme?',
    a:
      'There is no particular theme, however you can get inspired by our wedding invitations and our website. A lot of nature colours, light colours, pastels...',
    icon: hat,
  },
  {
    q: 'Where will the ceremony and reception take place?',
    a:
      'Both the ceremony and the reception will take place at the same venue, the Loonbeek Estate. The address is: Sint-Jansbergsteenweg 24, 3040 Loonbeek. The ceremony will begin at half past two.',
    icon: map,
  },
  {
    q: 'If i come by car where can i park?',
    a: `We have reserved a parking right across from the venue, there should be enough space for everyone.`,
    icon: car,
  },
  {
    q: 'Where is the closest place to stay overnight?',
    a: `There are many hotels, AirBnb & B&B near the area or in Brussels. Brussels is about 20-30 minutes drive from the venue. However Leuven is just as close and both cities are accessible by public transport.`,
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
      'You can contact either of us until before the wedding day. During the day, you can ask Geoffrey (Best man), Aislinn (Maid of Honour) or Elodie (Coordinator) if you have any questions.',
    icon: question,
  },
  {
    q: `What are your plans for COVID-19?`,
    a: `For the moment, we continue to plan the day hoping for the best. However, closer to the date we will know what the security measures are for weddings. We will have masks available for anyone who feels more comfortable wearing one (it’s not obligatory at the moment). There will also be hand sanitiser available through out the day. The wedding will be outside, with plenty of fresh air, not in an enclosed space inside.
      
      We will post more information here as the situation evolves and rules change.`,
    // icon: question,
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
