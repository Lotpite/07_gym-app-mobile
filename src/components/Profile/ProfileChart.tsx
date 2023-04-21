import { ChartGraph, ChartNavigation, ChartNavigationItem, GraphItem, Scale, Slash } from '../../styles/ProfileChart.styled'
import React, { useEffect } from 'react'
import { ChartWrapper } from '../../styles/ProfileChart.styled'
import { SubText, Text } from '../../styles/Other.styled'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export const ProfileChart = () => {
  const user = useSelector((state: RootState) => state.auth.user)

  const getDay = (date: string) => {
    const newDate = new Date(date)
    const options: Intl.DateTimeFormatOptions = { weekday: 'short'};
    const dayName = newDate.toLocaleDateString('en-US', options)
    return dayName
  }

  const trainingList = user.gym.trainings.length > 7 ? user.gym.trainings.slice(user.gym.trainings.length - 7) : user.gym.trainings;

  const days = trainingList.map(item => {
    let totalRepeats = 0;
    item.exercises.forEach(exs => totalRepeats += exs.total)
    
    return {
      id: item.id,
      name: getDay(item.id),
      total: totalRepeats
    }
  })

  const getScaledItem = (arr: typeof days) => {
    let max = arr[0].total;

    arr.forEach((item,i) => {
      if(item.total > max) {
        max = item.total
      }
    })
    const multiplier = 100 / max
    const scaledItems = arr.map(item => {
     return {
      id: item.id,
      name: item.name,
      total: Math.floor(item.total * multiplier)
     }
    })
    debugger
    return scaledItems
  }

  const scaledDays = getScaledItem(days)

  useEffect(() => {
    console.log(trainingList)
  }, [])

  return (
    <ChartWrapper>
      <ChartNavigation>
        <ChartNavigationItem>
          <Text active={true}>
            week
          </Text>
        </ChartNavigationItem>
        <Slash/>
        <ChartNavigationItem>
          <Text>
            month
          </Text>
        </ChartNavigationItem>
        <Slash/>
        <ChartNavigationItem>
          <Text>
            year
          </Text>
        </ChartNavigationItem>
      </ChartNavigation>

      <ChartGraph>
        {scaledDays.map(day => {
          return (
            <GraphItem key={day.id}>
              <Scale percent={day.total}/>
              <SubText>{day.name}</SubText>
          </GraphItem>
          )
        })}
        
      </ChartGraph>
    </ChartWrapper>
    
  )
}
