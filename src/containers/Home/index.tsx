import React, { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/Elements/Button';
import Input from 'components/Elements/Input/SearchInput';
import Results from 'components/Results';

import { searchTitle, searchEntityTitle } from './api';

const SearchField = ({
  title,
  placeholder,
  value,
  setValue,
  onSearch,
}: any) => (
  <InputWrapper>
    <Label>{title}</Label>
    <Input
      value={value}
      placeholder={placeholder}
      onChange={(evt: any) => setValue(evt.target.value)}
      onDeleteClick={() => setValue('')}
    />
    <StyledButton type="button" onClick={onSearch}>
      Search
    </StyledButton>
  </InputWrapper>
);

const Home = ({  }: IHomeProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [searchEntity, setSearchEntity] = useState('');
  const [results, setResults] = useState([]);
  const [currentSearch, setCurrentSearch] = useState('');

  const handleTitleSubmit = async (evt: any) => {
    setCurrentSearch(search);
    setIsLoading(true);
    evt.preventDefault();
    // fetch data
    try {
      const res: any = await searchTitle(search);
      console.log({ res });
      setResults(res.stories);
      setIsLoading(false);
    } catch (err) {
      console.log({ err });
      setIsLoading(false);
    }
  };
  const handleEntityTitleSubmit = async (evt: any) => {
    setCurrentSearch(searchEntity);
    setIsLoading(true);
    evt.preventDefault();
    // fetch data
    try {
      const res: any = await searchEntityTitle(searchEntity);
      console.log({ res });
      setResults(res.stories);
      setIsLoading(false);
    } catch (err) {
      console.log({ err });
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <h3>Aylien API</h3>

      <div>
        <p>Hyundai Engineering & Construction</p>
        <p>Hyundai E&C</p>
        <p>BME:TRE </p>

        <p>Tecnicas Reunidas</p>
        <p>Tecnicas Reunidas S.A.</p>
      </div>

      <Form onSubmit={(evt: any) => evt.preventDefault()}>
        <SearchField
          title="Search Title"
          placeholder="Search Title e.g. BME:TRE"
          value={search}
          setValue={setSearch}
          onSearch={handleTitleSubmit}
        />
        <SearchField
          title="Search EntityTitle"
          placeholder="Search EntityTitle e.g. Hyundai Engineering"
          value={searchEntity}
          setValue={setSearchEntity}
          onSearch={handleEntityTitleSubmit}
        />
      </Form>

      {isLoading && <h2>Searching News Stories...</h2>}
      {results && results.length > 0 && (
        <ResultsWrapper style={{ opacity: isLoading ? 0.33 : 1 }}>
          <Results
            currentSearch={currentSearch}
            results={results}
            setResults={setResults}
          />
        </ResultsWrapper>
      )}
    </Container>
  );
};

interface IHomeProps {}

export default Home;

const Container = styled.div`
  color: #000;
  /* background-color: #bbdefb;
  background-color: #cfd8dc; */
  padding: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  input {
    width: 300px;
  }
`;

const Label = styled.label`
  width: 160px;
`;

const Form = styled.form`
  padding: 15px;
`;

const StyledButton = styled(Button)`
  height: 40px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const ResultsWrapper = styled.div`
  transition: opacity 0.3s;
`;
