import React from 'react'
import { Program, ProgramsContainer, ProgramsWrapper } from '../../styles/ProgramSelection.styled'
import { Button } from '../UI/Button'
import { Icon } from '../UI/Icon'

export const ProgramSelection = () => {
  const fu = () => {
    console.log('hi')
  }
  return (
    <ProgramsContainer>
        <ProgramsWrapper>
            <Program>
                <Icon name="programBasic"/>
            </Program>
            <Program>
            <Icon name="programNew"/>
            </Program>
        </ProgramsWrapper>
        <Button text='Back' func={fu}/>
    </ProgramsContainer>
  )
}
