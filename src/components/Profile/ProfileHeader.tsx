import React, { FC } from 'react'
import { Row, SubText, Title } from '../../styles/Other.styled'
import { Avatar, Level, HeaderWrapper, Rank, RankLabel, UserName } from '../../styles/Profile.styled'
import { Icon } from '../UI/Icon'

interface IProfileHeader {
  workoutsQty: number
}

export const ProfileHeader:FC<IProfileHeader> = ({workoutsQty}) => {
  return (
    <HeaderWrapper>
          <Row>
            <Level>
              <Title>
                  1
              </Title>
              <SubText>
                level
              </SubText>
            </Level>

            <Avatar>
              <Icon name='profile'/>
              <Rank>
                <Icon name='rank'/>
                <RankLabel>
                  #1
                </RankLabel>
              </Rank>
            </Avatar>

            <Level>
              <Title>
                  {workoutsQty}
              </Title>
              <SubText>
                workouts
              </SubText>
            </Level>
          </Row>
          <UserName>
            <Title>
              Andrew Arkhypov
            </Title>
          </UserName>
    </HeaderWrapper>
  )
}
