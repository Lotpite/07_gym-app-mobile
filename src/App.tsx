import React from 'react';
import { Account } from './components/Containers/Account';
import { Gym } from './components/Containers/Gym';
import { ProgramDescription } from './components/Program/ProgramDescription';
import { ProgramSelection } from './components/Program/ProgramSelection';
import { GlobalStyle } from './styles/global.styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { AppContainer } from './styles/App.styled';
import { Login } from './components/Auth/Login';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {

  const {user} = useSelector((state: RootState) => state.auth)
  console.log(user)
  return (
    <AppContainer>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user.email ? <Account/> : <Login/>}/>  
          <Route path="/programs" element={<ProgramSelection/>}/> 
          <Route path="/programs/basic" element={<ProgramDescription/>}/> 
          <Route path="/gym" element={<Gym/> }/> 
        </Routes>
      </BrowserRouter>     
    </AppContainer>
  );
}

export default App;
