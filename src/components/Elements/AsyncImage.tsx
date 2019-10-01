import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AsyncImage = ({ src, alt }: AsyncImageProps): any => {
  const [loaded, setLoaded] = useState(false);

  useEffect((): any => {
    const img = new Image();
    img.onload = (): any => setLoaded(true);
    img.src = src;
  }, [src]);

  return <FadeInImage src={src} alt={alt || ''} loaded={loaded} />;
};

interface AsyncImageProps {
  src: string;
  alt?: string;
}

export default AsyncImage;

const FadeInImage = styled.img<any>`
  transition: opacity 1s;
  opacity: ${({ loaded }: any): number => (loaded ? 1 : 0)};
`;
