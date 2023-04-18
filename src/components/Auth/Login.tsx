import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { createUser, fetchUser } from '../../store/slices/auth/auth'
import { ButtonContainer, LoginForm, LoginInput, LoginWrapper, SubmitButton } from '../../styles/Login'
import { Button } from '../UI/Button'
import { Title } from '../../styles/Other.styled'

export const Login = () => {

  const dispatch = useAppDispatch()
  const [registration, setRegistration] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  useEffect(() => {

  }, [])

  const clearInputs = () => {
    setName('')
    setEmail('')
    setPassword('')
    setPassword2('')
  }
  
  const logIn = () => {
    dispatch(fetchUser({email, password}))
    clearInputs()
  }

  const signIn = () => {
    if(password === password2) {
      clearInputs()
      dispatch(createUser({name, email, password}))
      setRegistration(false)
    } else {
       alert('Password does not match')
    }
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    registration 
    ? signIn()
    : logIn()
  }

  return (
    <LoginWrapper>
      <LoginForm onSubmit={submitForm}>
        <Title>{registration ? 'Registration' : 'Login'}</Title>
        {registration 
        ? <LoginInput type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} autoComplete='on'/>
        : <></>}
        <LoginInput type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} autoComplete='on'/>
        <LoginInput type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} autoComplete='on'/>
        {registration 
        ? <LoginInput type="password" placeholder="Confirm password" value={password2} onChange={e => setPassword2(e.target.value)} autoComplete='on'/>
        : <></>}
        <ButtonContainer>
          <Button text={registration ? 'Back to login' : 'Registration'} func={() => setRegistration(!registration)} color="#1E87D3" size='small'/>
          <Button text={registration ? 'Confirm' : 'Login'} func={registration ? signIn : logIn}  size='small'/>
        </ButtonContainer>
        <SubmitButton type='submit' />
      </LoginForm>
    </LoginWrapper>
  )
}
