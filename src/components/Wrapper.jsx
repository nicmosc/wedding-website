import React, { Fragment, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

import Loader from './Loader';

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [hideLoader, setHideLoader] = useState(false);

  return (
    <GlobalContext.Provider value={{ hideLoader, setHideLoader }}>
      {children}
    </GlobalContext.Provider>
  );
};

const Wrapper = ({ children }) => {
  const { hideLoader, setHideLoader } = useContext(GlobalContext);

  if (typeof document === 'undefined') {
    return null;
  }

  const handleFinishLoading = () => {
    if (!hideLoader) {
      document.getElementById('__loader').style.display = 'none';
      setHideLoader(true);
    }
  };

  return (
    <Fragment>
      {hideLoader
        ? null
        : ReactDOM.createPortal(
            <Loader onFinish={handleFinishLoading} />,
            document.getElementById('body'),
          )}
      {children}
    </Fragment>
  );
};

export default Wrapper;
