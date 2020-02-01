import { FullpageContext } from '@ap.cx/react-fullpage';
import { css, keyframes } from 'emotion';
import React, { useContext } from 'react';

import sv from '../utils/vars';
import Subtitle from './Subtitle';

const move = keyframes`
  0% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(5px);
  }
`;

const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    [data-element='label'] > * {
      transition: ${sv.transition};
    }

    &:hover {
      cursor: pointer;

      [data-element='label'] > * {
        color: ${sv.neutral} !important;
      }

      [data-element='line'] {
        background: ${sv.neutralLight};
      }
    }
  `,
  line: css`
    width: 2px;
    height: 30px;
    background: ${sv.neutralLighter};
    transition: ${sv.transition};
    animation: calc(${sv.transitionTime} * 3) ease-in-out infinite alternate ${move};
  `,
};

const NextSectionTrigger = ({ children }) => {
  const value = useContext(FullpageContext);
  const { goto, slides, number } = value;

  return (
    <div onClick={() => goto(slides[number + 1])} className={styles.container}>
      <div data-element="line" className={styles.line} />
      <div data-element="label">
        <Subtitle>{children}</Subtitle>
      </div>
    </div>
  );
};

export default NextSectionTrigger;
