import React, { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AccountContainer, PleaseLogin } from '../../styles/Account.styled';
import { ProfileChart } from '../Profile/ProfileChart';
import { ProfileDaily } from '../Profile/ProfileDaily';
import { ProfileHeader } from '../Profile/ProfileHeader';
import { ProfileNavigation } from '../Profile/ProfileNavigation';
import { ProfileProgress } from '../Profile/ProfileProgress';
import { checkIsToday } from '../../helpers/checkDate';

interface IAccountProps  {
  disabled: boolean
}

export const Account: FC<IAccountProps> = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const workoutsQty = user.gym.trainings.length;
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(checkIsToday(user.gym.trainings[workoutsQty - 1].id))
  }, [disabled])

  return (
    <AccountContainer>
          <ProfileHeader workoutsQty={workoutsQty > 1 ? workoutsQty - 1 : 0} profileName={user.name}/>
          <ProfileProgress/>
          <ProfileDaily todaysWorkout={disabled ? user.gym.trainings[workoutsQty - 1] : user.gym.trainings[0]}/>
          <ProfileChart/>
          <ProfileNavigation disabled={disabled}/>
    </AccountContainer>
  )
}   
