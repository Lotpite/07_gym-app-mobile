import React from 'react'
import { Row } from '../../styles/Other.styled'
import { NavigationWrapper, SettingsButton, StartButton } from '../../styles/ProfileNavigation.styled'

export const ProfileNavigation = () => {
  return (
    <NavigationWrapper>
        <Row>
        <SettingsButton>&#x2022; &#x2022; &#x2022;</SettingsButton>
        <StartButton>Start</StartButton>
        </Row>
    </NavigationWrapper>
  )
}
