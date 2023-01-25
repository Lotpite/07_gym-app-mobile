import React from 'react'
import { Changer, Count, Exercise, ExerciseImg, GymContainer, GymContent, Repeater, Set, Sets } from '../../styles/Gym.styled'
import { Text, Title } from '../../styles/Other.styled'
import { Button } from '../UI/Button'
import { Icon } from '../UI/Icon'

export const Gym = () => {

  const done = () => {
    console.log('done');
  }

  return (
    <GymContainer>
        <GymContent>
          <Exercise>
            <ExerciseImg>
              <Icon name='pushup'/>
            </ExerciseImg>
            <Title>
              Push Up
            </Title>
          </Exercise>
          <Sets>
            <Text>Sets:</Text>
            <Set><text>1</text></Set>
            <Set><text>2</text></Set>
            <Set><text>3</text></Set>
            <Set><text>4</text></Set>
            <Set><text>5</text></Set>
          </Sets>
          <Repeater>
            <Changer>-</Changer>
            <Count>16</Count>
            <Changer>+</Changer>
          </Repeater>
          <Button text='Done' func={done}/>
        </GymContent>
    </GymContainer>
  )
}
