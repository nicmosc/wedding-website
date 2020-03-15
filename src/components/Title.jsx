import { css } from 'emotion';
import React from 'react';

import { sv } from '../utils';

const styles = {
  title: css`
    font-family: ${sv.altFontFamily};
    font-size: 8em;
    line-height: 0.53em;
    font-weight: 300;
    color: ${sv.neutral};
    margin: ${sv.marginLarge} 0;
    text-align: center;

    @media ${sv.screenS} {
      font-size: 5em;
      line-height: 0.7em;
    }
  `,
};

const Title = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
