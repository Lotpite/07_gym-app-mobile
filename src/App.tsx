import React from 'react';
import { Account } from './components/Containers/Account';
import { Gym } from './components/Containers/Gym';
import LoginForm from './components/LoginForm';
import { ProgramDescription } from './components/Program/ProgramDescription';
import { ProgramSelection } from './components/Program/ProgramSelection';
import { GlobalStyle } from './styles/global.styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {


  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Account/>}/> 
          <Route path="/programs" element={<ProgramSelection/>}/> 
          <Route path="/programs/basic" element={<ProgramDescription/>}/> 
          <Route path="/gym" element={<Gym/> }/> 

        </Routes>
      </BrowserRouter>
      
      {/* <LoginForm/> */}
      {/* <Account /> */}
      {/* <ProgramSelection/> */}
      {/* <ProgramDescription/> */}
      {/* <Gym/> */}
    </div>
  );
}

export default App;
