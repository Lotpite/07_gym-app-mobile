import React, { useEffect } from 'react';
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
import { setUserFromLocalStorage } from './store/slices/auth/auth';
import { useAppDispatch } from './hooks/redux';

const App = () => {

  const dispatch = useAppDispatch();
  const user =useSelector((state: RootState) => state.auth.user)

  useEffect(() => {
   getUser()
  }, [])

  const getUser = () => {
    let candidate = JSON.parse(localStorage.getItem('user') || '{}')
    if(Object.keys(candidate).length > 0) {
      console.log(candidate)
      dispatch(setUserFromLocalStorage(candidate))
    }
  }
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
