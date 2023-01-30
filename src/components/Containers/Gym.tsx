import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Changer, Count, Exercise, ExerciseImg, GymContainer, GymContent, Repeater, Set, Sets } from '../../styles/Gym.styled'
import { Text, Title } from '../../styles/Other.styled'
import { Button } from '../UI/Button'
import { Icon } from '../UI/Icon'

export const Gym = () => {

  const user = useSelector((state: RootState) => state.user)
  const currentProgram = user.gym.trainings[user.gym.trainings.length - 1]
    // newCount && setCount(newCount.reps)

  const [isCooling, setIsCooling] = useState(false)
  const [activeSet, setActiveSet] = useState(1)
  const [activeExercise, setActiveExercise] = useState(0)

  let newCount1 = currentProgram.exercises[activeExercise].sets.find( item => item.order == activeSet)
  const [count, setCount] = useState(newCount1 ? newCount1.reps : 5)
  const [sets, setSets] = useState([{}])


  const done = () => {
    let setToSave = {
      order: activeSet,
      reps: count
    }

    if(Object.keys(sets[0]).length === 0) {
      let newSets = [
        setToSave
      ]
      
      setSets(newSets)
    } else {
      let newSets = [
        ...sets,
        setToSave
      ]
      
      setSets(newSets)
    }
    setActiveSet(activeSet + 1)
    console.log('done');
  }

  const change = (x: number) => {
    let newCount = count + x

    if(newCount < 0 ) {
      return setCount(0)
    }

    if(newCount > 99) {
      alert('Do not lie to me')
      return setCount(99)
    }
   
      setCount(newCount)
    
  }

  useEffect(() => {
    console.log(user);
    console.log(sets);
    
  }, [count, activeSet])



  return (
    <GymContainer>
        <GymContent>
          <Exercise>
            <ExerciseImg>
              <Icon name={currentProgram.exercises[activeExercise].id}/>
            </ExerciseImg>
            <Title>
              Push Up
            </Title>
          </Exercise>
          <Sets>
            <Text>Sets:</Text>
            {currentProgram.exercises[activeExercise].sets.map(set => {
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
            <Changer onClick={() => change(-1)}>-</Changer>
            <Count>{count}</Count>
            <Changer onClick={() => change(1)}>+</Changer>
          </Repeater>
          <Button text='Done' func={done}/>
        </GymContent>
    </GymContainer>
  )
}
