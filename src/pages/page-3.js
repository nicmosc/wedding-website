import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import React from 'react';

const ScrollPage = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection
          style={{
            backgroundColor: 'lime',
            height: '100vh',
            padding: '1em',
          }}>
          1
        </FullpageSection>
        <FullpageSection
          style={{
            backgroundColor: 'coral',
            height: '200vh',
            padding: '1em',
          }}>
          2
        </FullpageSection>
        <FullpageSection
          style={{
            backgroundColor: 'firebrick',
            height: '40vh',
            padding: '1em',
          }}>
          3
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default ScrollPage;
