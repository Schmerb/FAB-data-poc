import React from 'react';

import PageMeta from 'utils/interfaces/PageMeta';

const MetaTags = ({ metaTags: { title, description, keywords, image } }: MetaTagsProps) => {
  return (
    <>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      {image && <meta name="og:image" content={image.url} />}
    </>
  );
};

interface MetaTagsProps {
  metaTags: PageMeta;
}

export default MetaTags;
