/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require('normalize.css/normalize.css');

exports.onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById('___loader').style.display = 'none';
  }, 2000);
};
