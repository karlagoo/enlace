import React from 'react';
import Calendar from '../components/Calendar';
import UserInfo from '../components/UserInfo';
import InviteBtn from '../components/InviteBtn';
import PenInvs from '../components/PenInvs';
import PersonalInfo from '../components/PersonalInfo';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Profile = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <PersonalInfo />
      <UserInfo />
      <PenInvs />
      <InviteBtn />
      <Calendar></Calendar>

    </div>


  )
}

export default Profile;