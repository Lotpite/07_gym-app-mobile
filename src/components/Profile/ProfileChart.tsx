import { ChartGraph, ChartNavigation, ChartNavigationItem, GraphItem, Scale, Slash } from '../../styles/ProfileChart.styled'
import React from 'react'
import { ChartWrapper } from '../../styles/ProfileChart.styled'
import { SubText, Text } from '../../styles/Other.styled'

export const ProfileChart = () => {
  let maxKal: number;

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
        <GraphItem>
          <Scale percent={90}/>
          <SubText>Mon</SubText>
        </GraphItem>
        <GraphItem>
          <Scale percent={40}/>
          <SubText>Tue</SubText>
        </GraphItem>
        <GraphItem>
          <Scale percent={90}/>
          <SubText>Wed</SubText>
        </GraphItem>
        <GraphItem>
          <Scale percent={5}/>
          <SubText>Thu</SubText>
        </GraphItem>
        <GraphItem>
          <Scale percent={98}/>
          <SubText>Fri</SubText>
        </GraphItem>
        <GraphItem>
          <Scale percent={100}/>
          <SubText>Sat</SubText>
        </GraphItem>
      </ChartGraph>
    </ChartWrapper>
    
  )
}
