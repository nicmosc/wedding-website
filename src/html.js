import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import Loader from './components/Loader';
import merlin from './fonts/merlin.regular.ttf';
import sv from './utils/vars';

const styles = {
  global: css`
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap');

    @font-face {
      font-family: Merlin;
      font-weight: 400;
      font-style: normal;
      src: url(${merlin}) format('truetype');
    }

    html,
    body {
      background: ${sv.backgroundColor};
      font-size: ${sv.defaultFontSize};
      line-height: ${sv.defaultLineHeight};
      letter-spacing: ${sv.defaultLetterSpacing};
      -webkit-font-smoothing: antialiased;
      -webkit-overflow-scrolling: touch;
    }

    * {
      font-family: ${sv.defaultFontFamily};
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `,
};

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} id="body">
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        {/* <div key={`loader`} id="___loader" style={{ pointerEvents: 'none' }}>
          <Loader />
        </div> */}
        <Global styles={styles.global} />
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
