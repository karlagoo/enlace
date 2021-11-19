export const homeObjOne = {
    id: 'profile',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Enlace...',
    headline: '0% stress. 100% Fun',
    description:
      'Get access to our top-tier website that allows you to schedule events with your friends and family with no hassle.',
    buttonLabel: 'Get Started',
    href: () => window.location.assign('/login'),
    imgStart: false,
    img: require('../images/link.jpg').default,
    alt: 'Link',
    dark: true,
    primary: true,
    darkText: false
  };
  
  export const homeObjTwo = {
    id: 'about us',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Behind The Screen',
    headline: 'Meet the Developers who Created this Application',
    description:
      'This dynamic team of ambitious coders have designed and built this application from scratch.',
    buttonLabel: 'Learn More',
    href: () => window.location.assign('/aboutus'),
    imgStart: true,
    img: require('../images/mother.jpg').default,
    alt: 'MotherBoard',
    dark: false,
    primary: false,
    darkText: true
  };
  
  export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Social Network Today',
    headline: 'Creating a profile is extremely easy',
    description:
      "Get everything set up and ready in under 10 minutes. All you need to do is add your information, invite your friends, and you're ready to go.",
    buttonLabel: 'Start Now',
    href: () => window.location.assign('/login'),
    imgStart: false,
    img: require('../images/matrix.jpg').default,
    alt: 'Sign Up',
    dark: false,
    primary: false,
    darkText: true
  };
  