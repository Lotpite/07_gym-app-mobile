import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/redux'
import { RootState } from '../../store/store'
import { GymContainer, GymContent } from '../../styles/Gym.styled'
import { Cooling } from '../Gym/Cooling'
import { Finish } from '../Gym/Finish'
import { NewSet } from '../Gym/Set'
import { useNavigate } from 'react-router-dom'
import { Button } from '../UI/Button'
import { addTrain, updateUser } from '../../store/slices/auth/auth'

export const Gym = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const lazyCount = (activeSet: number) => { 
    let newCount = currentProgram.exercises[activeExercise].sets.find( item => item.order === activeSet)
    return newCount ? newCount.reps : 5
  }

  const user = useSelector((state: RootState) => state.auth.user)
  const currentProgram = user.gym.trainings[user.gym.trainings.length - 1]

  const [isCooling, setIsCooling] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [disable, setDisable] = useState(false);

  const [activeSet, setActiveSet] = useState(5)
  const [activeExercise, setActiveExercise] = useState(2)
  const [count, setCount] = useState<number>(() => lazyCount(activeSet))

  const [newTrain, setNewTrain] = useState(currentProgram)

  useEffect(() => {
    console.log(newTrain);
    console.log(user)
  }, [count, activeSet, isFinished, newTrain])

  const setReps = (activeSet: number) => {
    let newCount = currentProgram.exercises[activeExercise].sets.find( item => item.order === activeSet)
    newCount && setCount(newCount.reps) 
  } 

  const updateTrain = () => {
    const newProg = {
      ...newTrain,
      id: activeExercise === 2 ? new Date().toLocaleDateString() : newTrain.id,
      exercises: newTrain.exercises.map(exs => {
        if(exs.id === newTrain.exercises[activeExercise].id) {
          return {
            ...exs,
            total: exs.total + count,
            sets: exs.sets.map(set => {
              if(set.order === activeSet) {
                return {
                  ...set,
                  reps: count
                }
              }
              return set
            })
          }
        }
        return exs
      })
    }
    setNewTrain(newProg)
  }

  const done = () => {

    if(activeSet === currentProgram.exercises[activeExercise].sets.length) {
      setActiveSet(1)
      setReps(1)

      if(activeExercise === currentProgram.exercises.length - 1) {
        setActiveExercise(0)
        setIsFinished(true)

      } else {
        setActiveExercise(activeExercise + 1)
        setIsCooling(true)
        setDisable(true)
      }

    } else {
      setActiveSet(activeSet + 1)
      setReps(activeSet+1)
      setIsCooling(true)
      setDisable(true)
    }

    updateTrain()
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
    setIsFinished(false)
    dispatch(updateUser(newTrain))
    dispatch(addTrain({email: user.email, newTrain}))
    navigate('/')
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

          <Button text={isFinished ? 'Finish' : isCooling ? 'Continue' : 'Done'}
                  isDisabled={disable}
                  func={isFinished ? finish : isCooling ? disableCooling : done}/>
        </GymContent>
    </GymContainer>
  )
}
