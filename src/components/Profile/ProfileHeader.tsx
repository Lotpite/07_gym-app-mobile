import React, { FC } from 'react'
import { Row, SubText, Title } from '../../styles/Other.styled'
import { Avatar, Level, HeaderWrapper, Rank, RankLabel, UserName } from '../../styles/Profile.styled'
import { Icon } from '../UI/Icon'

export const ProfileHeader:FC = () => {
  return (
    <HeaderWrapper>
          <Row>
            <Level>
              <Title>
                  34
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
                  16
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
