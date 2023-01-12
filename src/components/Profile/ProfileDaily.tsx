import React from 'react'
import { Col, Text } from '../../styles/Other.styled'
import { DailyState, DailyWrapper } from '../../styles/ProfileDaily.styled'
import { ProgressCircle } from '../UI/ProgressCircle'

export const ProfileDaily = () => {
  return (
    <DailyWrapper>
        <DailyState>
          <ProgressCircle progressValue={10} iconName='pushup'/>
          <Text>
            10%
          </Text>
        </DailyState>
        <DailyState>
          <ProgressCircle progressValue={20} iconName='crunches'/>
          <Text>
            20%
          </Text>
        </DailyState>
        <DailyState>
          <ProgressCircle progressValue={50} iconName='squats'/>
          <Text>
            50%
          </Text>
        </DailyState>
        <DailyState>
          <ProgressCircle progressValue={100} iconName='march'/>
          <Text>
            100%
          </Text>
        </DailyState>
    </DailyWrapper>
  )
}
