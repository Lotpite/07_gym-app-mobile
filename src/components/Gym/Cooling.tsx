import React, { FC, useEffect, useState } from 'react'
import { Count, Exercise, ExerciseImg, Repeater, SetCool } from '../../styles/Gym.styled'
import { Text, Title } from '../../styles/Other.styled'
import { Icon } from '../UI/Icon'

interface ICoolingProps {
    iconName: string,
    func: () => void
  }

export const Cooling:FC<ICoolingProps> = ({iconName, func}) => {

    const [time, setTime] = useState(1)

    useEffect(() => {
        let timer = setTimeout(()=> {
            setTime(time - 1)
            console.log(time)
        }, 1000)
        // time === 0 && clearTimeout(timer)
        if(time === 0) {
          clearTimeout(timer)
          func()
        }
    }, [time])

  return (
    <>
        <Exercise>
            <ExerciseImg>
              <Icon  name={iconName}/>
            </ExerciseImg>
            <Title>
            Rest time
            </Title>
          </Exercise>
          <SetCool>
            <Text><b>Deep breath then exhale</b></Text>
          </SetCool>
          <Repeater>
            <Count>{time}</Count>
          </Repeater>
    </>
  )
}
