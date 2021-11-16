import React from 'react'
import Calendar from '../components/Calendar'
import UserInfo from '../components/UserInfo'
import InviteBtn from '../components/InviteBtn'
import PenInvs from '../components/PenInvs'
import PersonalInfo from '../components/PersonalInfo'


const Profile = () => {
  return (
    <div>
    <PersonalInfo/>
    <UserInfo/>
    <PenInvs/>
    <InviteBtn/>
    <Calendar></Calendar>

    </div>


  )
}

export default Profile
