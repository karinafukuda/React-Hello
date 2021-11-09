import { useState, useEffect } from 'react';
import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import OnlineOffline from './components/OnlineOffline';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';

export default function App() {
  //console.log('Teste no console do navegador');
  // const state = useState('Karina');
  // console.log(state);
  // const name = state[0];
  // const setName = state[1];

  //Hook
  const [name, setName] = useState('Karina');

  const [birthDate, setBirthDate] = useState('1989-06-30');

  const [showTimer, setShowTimer] = useState(false);

  const [isOnline, setIsOnline] = useState(true);

  //ideia de efeito colateral -> 1 params função 2 params deps
  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    //online e offline nativos js

    function toogleOnline() {
      setIsOnline(true);
    }

    function toogleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', toogleOnline);
    window.addEventListener('offline', toogleOffline);

    return () => {
      window.removeEventListener('online', toogleOnline);
      window.removeEventListener('offline', toogleOffline);
      //limpar o evento
    };
  });

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    console.log(newBirthDate);
    setBirthDate(newBirthDate);
  }

  function toogleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    <>
      <Header>React Hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline} />

        {showTimer && (
          <div className="text-right mt-4">
            <Timer />
          </div>
        )}

        <div className="">
          <CheckboxInput
            labelDescription="Mostrar contador"
            onCheckboxChange={toogleShowTimer}
          />
        </div>

        <TextInput
          id={getNewId()} // gera um id unico e evita conflitos
          labelDescription="Digite seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <DateInput
          id={getNewId()}
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
