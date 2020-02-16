import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

import sv from '../utils/vars';

const Link = ({ to, children }) => {
  return (
    <AniLink duration={2} cover to={to} direction="right" bg={sv.neutralLight}>
      {children}
    </AniLink>
  );
};

export default Link;
