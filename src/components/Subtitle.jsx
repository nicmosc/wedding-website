import { css } from 'emotion';
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
};

const Subtitle = ({ children }) => {
  return <div className={styles.subtitle}>{children}</div>;
};

export default Subtitle;
