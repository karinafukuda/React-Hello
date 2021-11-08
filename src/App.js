import { useState } from 'react';
import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';
import { getAgeFrom } from './helpers/dateHelpers';

export default function App() {
  //console.log('Teste no console do navegador');
  // const state = useState('Karina');
  // console.log(state);
  // const name = state[0];
  // const setName = state[1];

  //Hook
  const [name, setName] = useState('Karina');

  const [birthDate, setBirthDate] = useState('1989-06-30');

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    console.log(newBirthDate);
    setBirthDate(newBirthDate);
  }

  return (
    <>
      <Header>React Hello</Header>

      <Main>
        <TextInput
          labelDescription="Digite seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <DateInput
          labelDescription="Digite sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          Meu nome é {name}, com {name.length} caracteres e tenho{' '}
          {getAgeFrom(birthDate)} anos.
        </p>
      </Main>
    </>
  );
}
