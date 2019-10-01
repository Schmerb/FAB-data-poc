import React, { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/Elements/Button';

const Result = ({ result }: IResultProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <div>
        <label htmlFor={`title_${result.id}`}>Title:</label>
        <Title id={`title_${result.id}`}>{result.title}</Title>
        <label htmlFor={`date_${result.id}`}>Date Published: </label>
        <Date id={`date_${result.id}`}>{result.publishedAt}</Date>
      </div>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? 'Read More' : 'Close'}
      </Button>
      {isOpen && <BodyText>{result.body}</BodyText>}
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
`;

const BodyText = styled.p`
  text-align: left;
`;

const Title = styled.h2``;
const Date = styled.h3``;
