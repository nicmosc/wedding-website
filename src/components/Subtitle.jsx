import { css, cx } from 'emotion';
import React from 'react';

import { sv } from '../utils';

const styles = {
  subtitle: css`
    font-family: ${sv.defaultFontFamily};
    font-size: 1em;
    color: ${sv.neutralLight};
    text-transform: uppercase;
    margin: ${sv.marginSmall} 0;

    @media ${sv.screenS} {
      font-size: 0.9em;
      text-align: center;
      margin: 5px 0;
    }
  `,
  noMargin: css`
    margin: 0;
  `,
};

const Subtitle = ({ children, noMargin, style }) => {
  return (
    <div
      style={style}
      className={cx(styles.subtitle, {
        [styles.noMargin]: noMargin,
      })}>
      {children}
    </div>
  );
};

export default Subtitle;
