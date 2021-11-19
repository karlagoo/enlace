import React from 'react';
import Calendar from '../components/Calendar';
import UserInfo from '../components/UserInfo';
import InviteBtn from '../components/InviteBtn';
import PenInvs from '../components/PenInvs';
import PersonalInfo from '../components/PersonalInfo';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer/index'


const Profile = () => {
  return (
    <Container className="justify-space-around">
      <Sidebar />
      <Navbar />
      <PersonalInfo />
      <Calendar></Calendar>
      <PenInvs />
      <Footer />
    </Container>


  )
}

export default Profile;