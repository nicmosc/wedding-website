import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Loader from './Loader';

const Wrapper = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Loader />, document.getElementById('body'))}
      {children}
    </Fragment>
  );
};

export default Wrapper;
