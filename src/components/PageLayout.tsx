import React from 'react';

import PageStyles from 'components/PageStyles';
import MetaTags from 'components/Base/MetaTags';

import PageMeta from 'utils/interfaces/PageMeta';

const PageLayout = ({ metaTags, children, noStyles }: PageLayoutProps) => {
  return (
    <PageStyles noStyles={noStyles}>
      <MetaTags metaTags={metaTags} />
      {children}
    </PageStyles>
  );
};

export default PageLayout;

export interface PageLayoutProps {
  metaTags: PageMeta;
  children: any;
  noStyles?: boolean;
}
