import { css, cx } from 'emotion';
import React from 'react';

import sv from '../utils/vars';

const styles = {
  subtitle: css`
    font-family: ${sv.defaultFontFamily};
    font-size: 1em;
    color: ${sv.neutralLight};
    font-weight: 300;
    text-transform: uppercase;
    margin: ${sv.marginSmall} 0;
  `,
  noMargin: css`
    margin: 0;
  `,
};

const Subtitle = ({ children, noMargin }) => {
  return (
    <div
      className={cx(styles.subtitle, {
        [styles.noMargin]: noMargin,
      })}>
      {children}
    </div>
  );
};

export default Subtitle;
