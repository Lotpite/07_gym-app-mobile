import React, { FC } from 'react'
import { Row, SubText, Title } from '../../styles/Other.styled'
import { Avatar, Level, HeaderWrapper, Rank, RankLabel, UserName } from '../../styles/Profile.styled'
import { Icon } from '../UI/Icon'

interface IProfileHeader {
  workoutsQty: number;
  profileName: string;
  level?: number;
  rank?: number;
}

export const ProfileHeader:FC<IProfileHeader> = ({workoutsQty, profileName, level, rank}) => {
  return (
    <HeaderWrapper>
          <Row>
            <Level>
              <Title>
                  {level ?? 1}
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
                  #{rank ?? 1}
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
              {profileName}
            </Title>
          </UserName>
    </HeaderWrapper>
  )
}
