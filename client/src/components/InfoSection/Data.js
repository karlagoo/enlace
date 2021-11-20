export const homeObjOne = {
  id: 'profile',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Scheduling without the Hassle',
  headline: '0% stress. 100% Fun',
  description:
    'Do you have a fear of missing out? Are you having a hard time remembering which event that you committed to? Get access to our top-tier website that allows you to schedule events with your friends and family, and save it in your calendar. Register today.',
  buttonLabel: 'Get Started',
  href: () => window.location.assign('/login'),
  imgStart: false,
  img: require('../images/calendar.png').default,
  alt: 'Calendar',
  dark: true,
  primary: true,
  darkText: true
};

export const homeObjTwo = {
  id: 'aboutUs',
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
  img: require('../images/coders.jpg').default,
  alt: 'MotherBoard',
  dark: true,
  primary: true,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Social Network Today',
  headline: 'Creating a profile is a breeze',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information, invite your friends, and you're ready to be enlaced.",
  buttonLabel: 'Start Now',
  href: () => window.location.assign('/login'),
  imgStart: false,
  img: require('../images/login.png').default,
  alt: 'Sign Up',
  dark: true,
  primary: true,
  darkText: true
};