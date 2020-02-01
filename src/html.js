import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import sv from './utils/vars';

const styles = css`
  @import url('https://fonts.googleapis.com/css?family=Poppins:500&display=swap');

  @font-face {
    font-family: Merlin;
    font-weight: 400;
    font-style: normal;
    src: url('Merlin.ttf') format('ttf');
    font-display: swap;
  }

  html,
  body {
    background: ${sv.backgroundColor};
    font-size: ${sv.defaultFontSize};
    line-height: ${sv.defaultLineHeight};
    letter-spacing: ${sv.defaultLetterSpacing};
    -webkit-font-smoothing: auto;
    -webkit-overflow-scrolling: touch;
  }

  * {
    font-family: ${sv.defaultFontFamily};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: 'center',
            backgroundColor: '#F2F2F2',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}>
          <h1>Loading...</h1>
        </div>
        <Global styles={styles} />
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
