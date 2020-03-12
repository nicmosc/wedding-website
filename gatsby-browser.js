/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require('normalize.css/normalize.css');

import React from 'react';

import { GlobalContextProvider } from './src/components/Wrapper';

export const wrapRootElement = ({ element }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
