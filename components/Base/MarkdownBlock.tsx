import React from 'react';
import ReactMarkdown from 'react-markdown';

import AsyncImage from 'components/Elements/AsyncImage';

const markdownRenderers: any = {
  /**
   * Break images out of paragraph tags
   */
  paragraph: function renderParagraph(props: any): any {
    const { children } = props;
    const { key } = children[0];

    return key.indexOf('image') !== -1 ? children : <p>{children}</p>;
  },
  /**
   * Render images and videos
   */
  image: function renderImage(props: any): any {
    // const { src } = props;
    // if (src.indexOf('youtube') >= 0) {
    //   return <EmbedYoutube url={src} />;
    // }

    return <AsyncImage {...props} />;
  },
};

const MarkdownBlock = ({ source }: MarkdownBlockProps): any => (
  <ReactMarkdown source={source} renderers={markdownRenderers} />
);

interface MarkdownBlockProps {
  source: string;
}

export default MarkdownBlock;
