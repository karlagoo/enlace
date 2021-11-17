
import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
  
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);
  
    const toggleHome = () => {
      scroll.scrollToTop();
    };

    return (
        <>
            {/* <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
            //         {/* <img src="" alt=""></img> */}
            {/* //     </NavLink> */}
            {/* //     <Bars />
            //     <NavMenu>
            //         <NavLink to="/profile" activeStyle>
            //             Profile
            //         </NavLink>
            //         <NavLink to="/about-us" activeStyle>
            //             About Us
            //         </NavLink>
            //     </NavMenu>
            //     <NavBtn>
            //         <NavBtnLink to="/signin">Sign In</NavBtnLink>
            //     </NavBtn>
            // </Nav> */}

            <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              ENLACE
              {/* <img src="" alt=""></img> */}
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
            <NavItem>
                <NavLinks
                  to='profile'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Profile
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to='about-us'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About Us
                </NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>


        </>
    );
};

export default Navbar;