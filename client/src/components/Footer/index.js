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
                  
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
              <SocialIcons>
                <SocialIconLink
                target='_blank'
                aria-label='Github'
                href='https://github.com/Mheer91'
              >Michael Heer
                <Icon />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Github'
                href='https://github.com/karlagoo'
              >Karla Goo
                <Icon />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Github'
                href='https://github.com/micahwaweru'
              >Micah Waweru
                <Icon />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Github'
                href='https://github.com/Whit1JL'
              >Jessica White
                <Icon />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'aria-label='Github' href='https://github.com/Enlace-Team1/enlace'>Enlace GitHub Repository<Icon />
              </SocialIconLink>
              </SocialIcons>

            <br></br>
              <SocialLogo to='/' onClick={toggleHome}>
                Enlace
              </SocialLogo>
              <WebsiteRights>ENLACE  &copy; {new Date().getFullYear()} - Michael Heer, Karla Goo, Micah Waweru, and Jessica White
                </WebsiteRights>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer> 
      </div>
    </footer>
  );
};

export default Footer;