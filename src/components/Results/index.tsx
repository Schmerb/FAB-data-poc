import React from 'react';
// import styled from 'styled-components';

import Button from 'components/Elements/Button';

import Result from './Result';

const Results = ({ results, setResults, currentSearch }: IResultsProps) => {
  return (
    <div>
      <Button
        style={{ backgroundColor: '#ed7165' }}
        onClick={() => setResults([])}>
        Clear Results
      </Button>
      <h2>
        Results for &quot;{currentSearch}&quot;: ({results.length})
      </h2>
      <ul>
        {results &&
          results.length > 0 &&
          results.map((result: any) => (
            <Result key={result.id} result={result} />
          ))}
      </ul>
    </div>
  );
};

interface IResultsProps {
  currentSearch?: string;
  results?: any;
  setResults: (results: any) => void;
}

export default Results;
