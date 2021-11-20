import React from 'react';
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
import Auth from '../../utils/auth';

const Sidebar = ({ isOpen, toggle }) => {


  const loggedIn = Auth.loggedIn();
  
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* <Icon onClick={toggle}>
        <CloseIcon />
      </Icon> */}
      <SidebarWrapper>
        <SidebarMenu>
        {/* <SidebarLink
            to='profile'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Profile
          </SidebarLink> */}
          <SidebarLink
            to='aboutUs'
            onClick={() => window.location.assign('/aboutUs')}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            
          >
            About Us
          </SidebarLink>
          <SidebarLink
            to='login'
            onClick={loggedIn ? () => window.location.assign('/profiles') : () => window.location.assign('/login')}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            {loggedIn ? "Profile" : "Sign In/Sign Up"}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;