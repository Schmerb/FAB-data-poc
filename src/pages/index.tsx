import React from 'react';

import PageLayout from 'components/PageLayout';
import Home from 'containers/Home';

import PageMeta from 'utils/interfaces/PageMeta';

const Homepage = ({ metaTags }: HomepageProps) => {
  return (
    <PageLayout metaTags={metaTags}>
      <h1>Hello friend!</h1>
      <p>Good luck on this new project ;)</p>
      <Home />
    </PageLayout>
  );
};

export default Homepage;

Homepage.getInitialProps = async () => {
  // do your queries here and build up all the props the Page will need.

  return {
    metaTags: {
      title: 'Hello Friend!',
      description: 'Next.js Boilerplate by The Virtual Forge',
    },
  };
};

export interface HomepageProps {
  metaTags: PageMeta;
}
