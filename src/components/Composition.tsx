import React from 'react';

type CompositionProps = {
  name: string;
};

const Composition: React.FC<CompositionProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

type PersonProps = {
  name: string;
};

const Person: React.FC<PersonProps> = ({ name }) => {
  return (
    <div>
      <h2>Person Component</h2>
      <Composition name={name} />
    </div>
  );
};

export default Person;
