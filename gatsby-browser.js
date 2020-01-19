/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById('___loader').style.display = 'none';
  }, 1000);
};
