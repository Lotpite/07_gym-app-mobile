import React from 'react'
import { Program, ProgramsContainer, ProgramsWrapper } from '../../styles/ProgramSelection.styled'
import { Button } from '../UI/Button'
import { Icon } from '../UI/Icon'
import { Link, useNavigate } from 'react-router-dom';

export const ProgramSelection = () => {
  const navigate = useNavigate()

  const fu = () => {
    navigate('/')
  }
  return (
    <ProgramsContainer>
        <ProgramsWrapper>
            <Program>
              <Link to='/programs/basic'>
                <Icon name="programBasic"/>
              </Link>
            </Program>
            <Program>
            <Icon name="programNew"/>
            </Program>
        </ProgramsWrapper>
        <Button text='Back' func={fu}/>
    </ProgramsContainer>
  )
}
