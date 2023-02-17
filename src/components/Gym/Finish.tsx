import React, { FC, useEffect } from 'react'
import { Count, Exercise, ExerciseImg, Repeater, SetCool } from '../../styles/Gym.styled'
import { Text, Title } from '../../styles/Other.styled'
import { Icon } from '../UI/Icon'

interface IFinishProps {
    iconName: string,
    trainingsCount: number,
  }

export const Finish:FC<IFinishProps> = ({iconName, trainingsCount}) => {

  return (
    <>
        <Exercise>
            <ExerciseImg>
              <Icon  name={iconName}/>
            </ExerciseImg>
            <Title>
            Congratulations!
            </Title>
          </Exercise>
          <SetCool>
            <Text><b>You have done workout number</b></Text>
          </SetCool>
          <Repeater>
            <Count>{trainingsCount}</Count>
          </Repeater>
    </>
  )
}
