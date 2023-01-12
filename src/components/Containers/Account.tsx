import React, { FC } from 'react'
import { AccountContainer } from '../../styles/Account.styled';
import { ProfileChart } from '../Profile/ProfileChart';
import { ProfileDaily } from '../Profile/ProfileDaily';
import { ProfileHeader } from '../Profile/ProfileHeader';
import { ProfileNavigation } from '../Profile/ProfileNavigation';
import { ProfileProgress } from '../Profile/ProfileProgress';

export const Account: FC = () => {

  return (
    <AccountContainer>
      <ProfileHeader />
      <ProfileProgress/>
      <ProfileDaily/>
      <ProfileChart/>
      <ProfileNavigation/>
    </AccountContainer>
  )
}   
