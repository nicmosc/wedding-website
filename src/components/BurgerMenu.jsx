import { css } from 'emotion';
import React from 'react';

import sv from '../utils/vars';
import Icon from './Icon';

const styles = {
  menu: css`
    color: ${sv.neutralLight};
    transition: ${sv.transition};

    &:hover {
      cursor: pointer;
      color: ${sv.neutral};
    }
  `,
};

const BurgerMenu = () => {
  return (
    <div className={styles.menu}>
      <Icon name="menu" />
    </div>
  );
};

export default BurgerMenu;