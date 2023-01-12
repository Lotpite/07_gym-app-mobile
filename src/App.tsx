import React from 'react';
import { Account } from './components/Containers/Account';
import LoginForm from './components/LoginForm';
import { GlobalStyle } from './styles/global.styled';

function App() {


  return (
    <div>
      <GlobalStyle/>
      {/* <LoginForm/> */}
      <Account />
    </div>
  );
}

export default App;
