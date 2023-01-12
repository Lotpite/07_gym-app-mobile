import React, { FC } from 'react'
import { Row, SubText, Text } from '../../styles/Other.styled'
import { LevelPercent, LevelProgress, ProgressWrapper } from '../../styles/ProfileProgress.styled'
import { Icon } from '../UI/Icon'
import { ProgressBar } from '../UI/ProgressBar'

export const ProfileProgress:FC = () => {
  return (
    <ProgressWrapper>
        <LevelProgress>
          <Row>
            <LevelPercent>
              <Icon name='profile' />
              <Text>
                13%
              </Text>
            </LevelPercent>
            <SubText>
              level up
            </SubText>
          </Row>
        </LevelProgress>
      
      <ProgressBar actual={13}/>
    </ProgressWrapper>
  )
}
