import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { GymContainer, GymContent } from '../../styles/Gym.styled'
import { Cooling } from '../Gym/Cooling'
import { Finish } from '../Gym/Finish'
import { NewSet } from '../Gym/Set'
import { Button } from '../UI/Button'

export const Gym = () => {

  const lazyCount = (activeSet: number) => { 
    let newCount = currentProgram.exercises[activeExercise].sets.find( item => item.order === activeSet)
    return newCount ? newCount.reps : 5
  }

  const user = useSelector((state: RootState) => state.user)
  const currentProgram = user.gym.trainings[user.gym.trainings.length - 1]

  const [isCooling, setIsCooling] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [activeSet, setActiveSet] = useState(5)
  const [activeExercise, setActiveExercise] = useState(2)
  const [count, setCount] = useState<number>(() => lazyCount(activeSet))
  const [sets, setSets] = useState([{}])
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    console.log('cool', isCooling, 'fin', isFinished);
    // console.log(sets);
  }, [count, activeSet])

  const setReps = (activeSet: number) => {
    let newCount = currentProgram.exercises[activeExercise].sets.find( item => item.order === activeSet)
    newCount && setCount(newCount.reps) 
  }

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

    if(activeSet === currentProgram.exercises[activeExercise].sets.length) {
      setActiveSet(1)
      setReps(1)
      setIsFinished(true)

      if(activeExercise === currentProgram.exercises.length - 1) {
        setActiveExercise(0)

      } else setActiveExercise(activeExercise + 1)

    } else {
      setActiveSet(activeSet + 1)
      setReps(activeSet+1)
      setIsCooling(true)
      setDisable(true)
    }
    
    

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

  const disableCooling = () => {
    setIsCooling(false)
  }

  const activateButton = () => {
    setDisable(false)
  }

  const finish = () => {
    setIsFinished(true)
  }



  return (
    <GymContainer>
        <GymContent>
          {
            isFinished 
            ? <Finish iconName='finish'
            trainingsCount={user.gym.trainings.length}/>
            : isCooling 
            ? <Cooling iconName='cooling' func={activateButton}/>
            : <NewSet exerciseName={currentProgram.exercises[activeExercise].id}
            exercisesList={currentProgram.exercises[activeExercise].sets}
            repsCount={count}
            activeSet={activeSet}
            func={change}
            />
        
      }
          {/* <Cooling iconName='cooling' func={change}/> */}
          <Button text={isFinished ? 'Finish' : isCooling ? 'Continue' : 'Done'}
           isDisabled={disable}
            func={isCooling ? disableCooling : done}/>
        </GymContent>
    </GymContainer>
  )
}
