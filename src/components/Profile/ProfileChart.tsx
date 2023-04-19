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

  const days = user.gym.trainings.map(item => {
    let totalRepeats = 0;
    item.exercises.forEach(exs => totalRepeats += exs.total)
    
    return {
      id: getDay(item.id),
      total: totalRepeats
    }
  })

  const genChart = (arr: number[]) => {
    if(arr.length > 7) {
      return arr.slice(arr.length - 7, arr.length)
    } else {
      return arr
    }
  }

  useEffect(() => {
    console.log(genChart([1,2,3,4,5,6,7,8,9,10]))
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
        <GraphItem>
          <Scale percent={90}/>
          <SubText>Sun</SubText>
        </GraphItem>
        
      </ChartGraph>
    </ChartWrapper>
    
  )
}
