import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AccountContainer, PleaseLogin } from '../../styles/Account.styled';
import { ProfileChart } from '../Profile/ProfileChart';
import { ProfileDaily } from '../Profile/ProfileDaily';
import { ProfileHeader } from '../Profile/ProfileHeader';
import { ProfileNavigation } from '../Profile/ProfileNavigation';
import { ProfileProgress } from '../Profile/ProfileProgress';

export const Account: FC = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const workoutsQty = user.gym.trainings.length;
  
  const isToday = (lastDate: number) => {
    const now = new Date().toLocaleDateString()
    const before = new Date(lastDate).toLocaleDateString()
      return now === before
  }

  return (
    <AccountContainer>
      {user.id !== ''
      ? <>
          <ProfileHeader workoutsQty={workoutsQty > 1 ? workoutsQty - 1 : 0} profileName={user.name}/>
          <ProfileProgress/>
          <ProfileDaily todaysWorkout={isToday(+user.gym.trainings[workoutsQty - 1]) ? user.gym.trainings[workoutsQty - 1] : user.gym.trainings[0]}/>
          <ProfileChart/>
          <ProfileNavigation/>
        </>
      : <PleaseLogin>Please login</PleaseLogin>}
    </AccountContainer>
  )
}   
