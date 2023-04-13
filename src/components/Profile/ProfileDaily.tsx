import React, {FC} from 'react'
import { Text } from '../../styles/Other.styled'
import { DailyState, DailyWrapper } from '../../styles/ProfileDaily.styled'
import { ProgressCircle } from '../UI/ProgressCircle'
import { ITraining } from '../../models/IGym'

interface IProfileDaily {
  todaysWorkout: ITraining
}

export const ProfileDaily:FC<IProfileDaily> = ({todaysWorkout}) => {

  return (
    <DailyWrapper>
          {todaysWorkout?.exercises.map(exercise => {
            return (
              <DailyState key={exercise.id}>
                <ProgressCircle progressValue={exercise.total ?? 0} iconName={exercise?.id}/>
                <Text>{exercise.total ?? 0}%</Text>
              </DailyState>
            )
          })}
    </DailyWrapper>
  )
}
