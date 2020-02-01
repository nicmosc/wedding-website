import { generateIconStyles } from '@drawbotics/icons/dist/drycons.js';
import packageJson from '@drawbotics/icons/package.json';
import { Global, css as globalCss } from '@emotion/core';
import { css, cx } from 'emotion';
import React, { Fragment } from 'react';

const styles = {
  global: globalCss`
    ${generateIconStyles(packageJson.version)}
  `,
  root: css`
    font-size: 1.5em !important;
  `,
};

const Icon = ({ name }) => {
  return (
    <Fragment>
      <Global styles={styles.global} />
      <i className={cx(styles.root, `Drycon Drycon-${name}`)} />
    </Fragment>
  );
};

export default Icon;
