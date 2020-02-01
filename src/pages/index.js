import FullPage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import { css } from 'emotion';
import React from 'react';

import sv from '../utils/vars';

const styles = {
  title: css`
    font-family: ${sv.altFontFamily};
    font-size: 5em;
    line-height: 0.53em;
    color: ${sv.neutral};
  `,
};

const Index = () => {
  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection>
          <div className={styles.title}>Jemima & Nicolaos</div>
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  );
};

export default Index;
