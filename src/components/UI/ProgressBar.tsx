import React, { FC } from 'react'
import { ProgressBarWrapper, ProgressLineActual, ProgressLineDefault } from '../../styles/ProgressBar.styled';


interface ProgressProps {
    actual: number,
}

export const ProgressBar:FC<ProgressProps> = ({actual}) => {
  return (
    <ProgressBarWrapper>
        <ProgressLineActual actualProgress={actual}/>
        <ProgressLineDefault/>
      </ProgressBarWrapper>
  )
}
