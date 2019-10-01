import React, { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/Elements/Button';

const Result = ({ result }: IResultProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // @ts-ignore
  const date = new window.Date(result.publishedAt).toLocaleString();

  const link =
    (result.links && result.links.permalink) ||
    (result.links && result.links.coverages);

  return (
    <Container>
      <div>
        <label htmlFor={`title_${result.id}`}>Title:</label>
        <Title id={`title_${result.id}`}>{result.title}</Title>
        <label htmlFor={`date_${result.id}`}>Date Published: </label>
        <Date id={`date_${result.id}`}>{date}</Date>
      </div>
      <Controls>
        {link && (
          <Link href={link} target="_blank">
            View Article
          </Link>
        )}
        <Button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? 'Read More' : 'Close'}
        </Button>
      </Controls>
      {isOpen &&
        result.body
          .split('\n\n')
          .map((paragraph: string, i: number) => (
            <BodyText key={i}>{paragraph}</BodyText>
          ))}
    </Container>
  );
};

interface IResultProps {
  result: any;
}

export default Result;

const Container = styled.div`
  color: #000;
  background-color: #e3f2fd;
  padding: 15px;
  margin-top: 20px;
  ${({ theme }) => theme.styles.boxShadows[1]};

  label {
    color: #999;
  }
`;

const BodyText = styled.p`
  text-align: left;
`;

const Title = styled.h2`
  color: #333;
`;

const Date = styled.h3`
  color: #333;
`;
const Link = styled.a`
  color: grey;
  transition color 0.3s;
  &:hover {
    color: darkblue;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: baseline;
  button {
    margin-left: 25px;
  }
`;
