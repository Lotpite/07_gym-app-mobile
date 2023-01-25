import React from 'react';
import { Account } from './components/Containers/Account';
import { Gym } from './components/Containers/Gym';
import LoginForm from './components/LoginForm';
import { ProgramDescription } from './components/Program/ProgramDescription';
import { ProgramSelection } from './components/Program/ProgramSelection';
import { GlobalStyle } from './styles/global.styled';

function App() {


  return (
    <div>
      <GlobalStyle/>
      {/* <LoginForm/> */}
      {/* <Account /> */}
      {/* <ProgramSelection/> */}
      {/* <ProgramDescription/> */}
      <Gym/>
    </div>
  );
}

export default App;
