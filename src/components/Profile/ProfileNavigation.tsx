import React from 'react'
import { Row } from '../../styles/Other.styled'
import { NavigationWrapper, SettingsButton, StartButton } from '../../styles/ProfileNavigation.styled'
import { useNavigate } from 'react-router-dom'
import { Button } from '../UI/Button'

export const ProfileNavigation = () => {
  const navigate = useNavigate()
  const start = () => {
    navigate('/programs')
  }
  return (
    <NavigationWrapper>
        <Row>
        <SettingsButton>&#x2022; &#x2022; &#x2022;</SettingsButton>
        {/* <Button text='home' func={start}/> */}

        {/* <StartButton>Start</StartButton> */}
        <Button text='Start' func={start}/>
        </Row>
    </NavigationWrapper>
  )
}
