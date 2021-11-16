import React from 'react';
// Import hooks from React Router
import { useLocation, useHistory } from 'react-router-dom';
import { GoMarkGithub as Icon } from 'react-icons/go';
import { animateScroll as scroll } from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, WebsiteRights, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // We retrieve the current `location` object data from React Router
  const location = useLocation();
  // We get React Router's history object so we can access and adjust browser history
  const history = useHistory();

  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
<FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinkItems> 
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to='/sign-up'>How It Works</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/'>Contact</FooterLink>
                    <FooterLink to='/'>GitHub</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                Enlace
              </SocialLogo>
              <WebsiteRights>Enlace  &copy; {new Date().getFullYear()} - Michael Heer, Karla Goo, Micah Waweru, and Jessica White
                </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='GitHub'>
                  <Icon />
                </SocialIconLink>
              </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer> 
        {/* {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            // Go back to the previous page in our browser's history
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Michael Heer, Karla Goo, Micah Waweru, and Jessica White</h4> */}
      </div>
    </footer>
  );
};

export default Footer;