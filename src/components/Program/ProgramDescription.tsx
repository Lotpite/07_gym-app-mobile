import React from 'react'
import { Text, TextBold } from '../../styles/Other.styled'
import { ProgramAbout, ProgramAboutItem, ProgramDescriptionWrapper, ProgramNavigation } from '../../styles/ProgramDescription.styled'
import { Program } from '../../styles/ProgramSelection.styled'
import { Button } from '../UI/Button'
import { Icon } from '../UI/Icon'
import { useNavigate } from 'react-router-dom'

export const ProgramDescription = () => {

  const navigate = useNavigate()

  const back = () => {
    navigate('/programs')
  }

  const start = () => {
    navigate('/gym')
  }
  return (
    <ProgramDescriptionWrapper>
        <Program>
          <Icon name='programBasic'/>
        </Program>
        <ProgramAbout>
          <ProgramAboutItem>
            <Text><b>Name: </b>Basic</Text>
          </ProgramAboutItem>
          <ProgramAboutItem>
          <Text><b>Goal: </b>Increase body health attributes</Text>
          </ProgramAboutItem>
          <ProgramAboutItem>
            <Text><b>Difficulty</b> Normal</Text>
          </ProgramAboutItem>
          <ProgramAboutItem>
            <Text><b>Duration: </b>3 months (recommended)
            </Text>
          </ProgramAboutItem>
          <ProgramAboutItem>
            <TextBold>Description:</TextBold>
            <Text>Simple programs which contain only basic exercises. After 3 months you will increase your strength, agility, mental and body health. Girls gonna be able to see some of your muscles and boys will wanna slap your buts.</Text>
          </ProgramAboutItem> 
        </ProgramAbout>
        <ProgramNavigation>
        <Button text='Back' color='#FF0808' func={back}/>
        <Button text='Start' color='' func={start}/>
        </ProgramNavigation>
    </ProgramDescriptionWrapper>
  )
}
