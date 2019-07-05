import React from 'react';

import Page from 'utils/interfaces/Page';

const MetaTags = ({
  page: { MetaTitle, MetaDescription, MetaKeywords, MetaImage },
}: MetaTagsProps) => {
  return (
    <>
      <meta name="title" content={MetaTitle} />
      <meta name="description" content={MetaDescription} />
      {MetaKeywords && <meta name="keywords" content={MetaKeywords} />}

      <meta name="og:title" content={MetaTitle} />
      <meta name="og:description" content={MetaDescription} />
      <meta name="og:image" content={MetaImage && MetaImage.url} />
    </>
  );
};

interface MetaTagsProps {
  page: Page;
}

export default MetaTags;
