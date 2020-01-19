import React from 'react';
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageCount,
  FullpageNavigation,
} from '@ap.cx/react-fullpage';

const ScrollPage = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection
          style={{
            backgroundColor: 'lime',
            height: '80vh',
            padding: '1em',
          }}>
          1
        </FullpageSection>
        <FullpageSection
          style={{
            backgroundColor: 'coral',
            padding: '1em',
          }}>
          2
        </FullpageSection>
        <FullpageSection
          style={{
            backgroundColor: 'firebrick',
            padding: '1em',
          }}>
          3
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default ScrollPage;
