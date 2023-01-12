import React, { FC } from 'react'
import { CircleWrapper, EmptyCircle, FilledCircle, StyledCircle, StyledCircleEmpty } from '../../styles/ProgressCircle.styled';
import { Gradient } from './Gradient';
import { Icon } from './Icon';

interface ProgressProps {
  progressValue: number,
  iconName: string
}

export const ProgressCircle:FC<ProgressProps> = ({progressValue, iconName}) => {
  const circumference = 2 * Math.PI * 32;
  const offset = circumference * (100 - progressValue) / 100

  return (
    <CircleWrapper>
      <Gradient/>
      <FilledCircle>
        <svg>
          <StyledCircle circumference={circumference} offset={offset}/>
        </svg>
      </FilledCircle>
      <EmptyCircle>
        <svg>
          <StyledCircleEmpty circumference={circumference}/>
        </svg>
      </EmptyCircle>
      <Icon name={iconName}/>
    </CircleWrapper>
  )
}