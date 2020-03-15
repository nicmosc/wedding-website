import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

import { sv } from '../utils';

const Link = ({ to, children, external }) => {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <AniLink duration={2} cover to={to} direction="right" bg={sv.green}>
      {children}
    </AniLink>
  );
};

export default Link;
