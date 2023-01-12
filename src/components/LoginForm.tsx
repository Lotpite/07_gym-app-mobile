import React, { FC, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { signIn, signOut, signUp } from '../store/slices/auth/auth.actions'
import { getUsers } from '../store/slices/users/users.actions'

const LoginForm: FC= () => {

    const [email, setEmail] = useState<string>('exstornado@gmail.com')
    const [password, setPassword] = useState<string>('pass1231')
    const dispatch = useAppDispatch();

    const auth = useAppSelector(state => state.auth.isAuth)

    useEffect(() => {
      console.log('use effect');
    }, [auth])
    
    const fetchUsers = () => {
        // dispatch(getUsers());
        console.log(auth)
    }

    const login = () => { 
        dispatch(signIn({email, password}))
        clearInputs()
    }

    const registration = () => {
        dispatch(signUp({email, password})).then(res => console.log(res))
        clearInputs()
    }

    const logout = () => {
        dispatch(signOut())
    }

    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <input 
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text" 
                placeholder='Email'
            />
            <input 
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="text" 
                placeholder='Password'
            />
            {
            auth            
                ? <button onClick={() => logout()}>Logout</button>
                : <button onClick={() => login()}>Login</button> 
            }
            <button onClick={() => registration()}>Registration</button>
            <button onClick={() => fetchUsers()}>Get users</button>
        </div>
    )
}

export default LoginForm