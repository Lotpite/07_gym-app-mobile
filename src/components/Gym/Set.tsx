import React, { FC } from 'react'
import { Changer, Count, Exercise, ExerciseImg, Repeater, Set, Sets } from '../../styles/Gym.styled'
import { Text, Title } from '../../styles/Other.styled'
import { Icon } from '../UI/Icon'

interface ISetProps {
  exerciseName: string,
  exercisesList: {
            order: number;
            activated: boolean;
            reps: number;
        }[],
  repsCount: number,
  activeSet: number,
  func: (args: number) => void
}


export const NewSet:FC<ISetProps> = ({exerciseName, exercisesList,repsCount,activeSet,func}) => {
  return (
    <>
        <Exercise>
            <ExerciseImg>
              <Icon  name={exerciseName}/>
            </ExerciseImg>
            <Title>
            {exerciseName}
            </Title>
          </Exercise>
          <Sets>
            <Text>Sets:</Text>
            {exercisesList.map(set => {
              if(set.order <= activeSet) {
                return (
                  <Set key={set.order} active={true}><Text active={true}>{set.order}</Text></Set>
                )
              }
              return (
                <Set key={set.order} active={false}><Text active={false}>{set.order}</Text></Set>
              )
            })}
          </Sets>
          <Repeater>
            <Changer onClick={() => func(-1)}>-</Changer>
            <Count>{repsCount}</Count>
            <Changer onClick={() => func(1)}>+</Changer>
          </Repeater>
    </>
  )
}
