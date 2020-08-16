// icons for Navbar
  import aboutImg from '../img/iconNavbar/about_white.svg';
  import blogImg from '../img/iconNavbar/blog_white.svg';
  import contactImg from '../img/iconNavbar/contact_white.svg';
  import homeImg from '../img/iconNavbar/home_white.svg';
  import portfolioImg from '../img/iconNavbar/portfolio_white.svg';
  import resumeImg from '../img/iconNavbar/resume_white.svg';

  import aboutImgDark from '../img/iconNavbar/about_dark.svg';
  import blogImgDark from '../img/iconNavbar/blog_dark.svg';
  import contactImgDark from '../img/iconNavbar/contact_dark.svg';
  import homeImgDark from '../img/iconNavbar/home_dark.svg';
  import portfolioImgDark from '../img/iconNavbar/portfolio_dark.svg';
  import resumeImgDark from '../img/iconNavbar/resume_dark.svg';

import logo from '../img/logo/logo.jpg';

// icons for social in the Navbar
  import facebook from '../img/iconSocial/facebook.png';
  import twitter from '../img/iconSocial/twitter.png';
  import youtube from '../img/iconSocial/youtube.png';
  import vk from '../img/iconSocial/vk.png';

  import facebookDark from '../img/iconSocial/facebook_dark.png';
  import twitterDark from '../img/iconSocial/twitter_dark.png';
  import youtubeDark from '../img/iconSocial/youtube_dark.png';
  import vkDark from '../img/iconSocial/vk_dark.png';

// icons for contact page
  import contactIcon from '../img/contactPage/mail.svg';
  import pointMap from '../img/contactPage/address.svg';
  import phone from '../img/contactPage/phone.svg';

// icons for about page
import user from '../img/aboutPage/user.svg';

let store = {
  navMenuList: [
    [
      '/',
      {
        whiteImg: homeImg,
        darkImg: homeImgDark,
      },
      {
        name: 'главная',
        title: 'Главная',
        id: 4,
      },
    ],
    [
      '/about_me',
      {
        whiteImg: aboutImg,
        darkImg: aboutImgDark,
      },
      {
        name: 'обо мне',
        title: 'Обо мне',
        id: 1,
      },
    ],
    [
      '/resume',
      {
        whiteImg: resumeImg,
        darkImg: resumeImgDark,
      },
      {
        name: 'резюме',
        title: 'Резюме',
        id: 6,
      },
    ],
    [
      '/portfolio',
      {
        whiteImg: portfolioImg,
        darkImg: portfolioImgDark,
      },
      {
        name: 'портфолио',
        title: 'Портфолио',
        id: 5,
      },
    ],
    [
      '/blog',
      {
        whiteImg: blogImg,
        darkImg: blogImgDark,
      },
      {
        name: 'блог',
        title: 'Блог',
        id: 2,
      },
    ],
    [
      '/contacts',
      {
        whiteImg: contactImg,
        darkImg: contactImgDark,
      },
      {
        name: 'контакты',
        title: 'Контакты',
        id: 3,
      },
    ],
  ],
  logo: {
    url: logo,
    name: 'это я',
    title: 'Виталий Кожушко'
  },
  socialColor: [
    {
      url: facebook,
      name: 'facebook',
      id: 1,
    },
    {
      url: twitter,
      name: 'twitter',
      id: 2,
    },
    {
      url: youtube,
      name: 'youtube',
      id: 3,
    },
    {
      url: vk,
      name: 'vk',
      id: 4,
    }
  ],
  socialDark: [
    {
      url: facebookDark,
      name: 'facebook',
      id: 1,
    },
    {
      url: twitterDark,
      name: 'twitter',
      id: 2,
    },
    {
      url: youtubeDark,
      name: 'youtube',
      id: 3,
    },
    {
      url: vkDark,
      name: 'vk',
      id: 4,
    }
  ],
  rights: {
    year: '2020',
    sign: '&copy;',
    text: 'Все права защищены',
  },
  contactPage: [
    {
      contactIcon: {
        titlePage: 'Контакты',
        url: contactIcon,
        name: 'конверт',
      },
    },
    {
      button:{
        title: 'Отправить',
        type: 'button',
      }
    },
    [
      {
        id: 1,
        contact: 'itvkip@yandex.ru',
        img: contactIcon,
        titleImg: 'e-mail',
      },
      {
        id: 2,
        contact: '190000, Санкт-Петербург',
        img: pointMap,
        titleImg: 'адрес',
      },
      {
        id: 3,
        contact: '+7 (921) 906-49-13',
        img: phone,
        titleImg: 'телефон',
      },
    ]
  ],
  aboutPage:[
    {
      aboutIcon: {
        titlePage: 'Обо мне',
        url: user,
        name: 'обо мне',
      },
    },
    {
      about: {
        titleArticle: 'Frontend Developer',
        text: 'Lorem ipsum Esse consectetur eiusmod qui in dolore magna labore cillum occaecat elit sed non et ullamco fugiat occaecat et deserunt nulla culpa incididunt commodo tempor adipisicing dolore minim ut excepteur consectetur do nostrud incididunt dolore et ullamco proident sint ut excepteur do dolore cupidatat mollit tempor nisi laboris ad sed laborum incididunt fugiat in in id cupidatat exercitation ad et non fugiat minim pariatur in ut magna dolore ut deserunt pariatur do ex et in in elit tempor aliquip ut commodo duis aliqua aliquip cupidatat dolore irure dolor pariatur mollit aliqua et sed nisi ut qui nisi incididunt incididunt occaecat elit aliquip consectetur aliquip ea id do tempor velit sed ea sed sit labore ex velit incididunt esse velit pariatur nulla sint id adipisicing duis sed est dolore sint officia esse et in qui reprehenderit veniam laborum amet ea est ea non cillum nulla dolor amet esse ullamco nulla nulla incididunt id ullamco in cillum consequat id officia elit adipisicing duis nisi in eiusmod laborum ad sit ut sint dolore dolore ut adipisicing sunt aliqua reprehenderit irure deserunt sit ex culpa nisi sed in velit in sit ad quis deserunt tempor esse qui dolor aute anim in irure in commodo velit occaecat sit enim laboris enim velit duis duis commodo pariatur duis ex id nisi enim dolore aute fugiat.',
        wishes: 'С наилучшими пожеланиями, Виталий Кожушко',
      },
      personalInfo: {
        titleArticle: 'Персональная информация',
        data: [
          {
            name: 'ФИО:',
            val: 'Виталий Кожушко'
          },
          {
            name: 'Возраст:',
            val: '33'
          },
          {
            name: 'Адрес:',
            val: '190000, Санкт-Петербург'
          },
          {
            name: 'Эл. почта:',
            val: 'itvkip@yandex.ru'
          },
          {
            name: 'Телефон',
            val: '+7 (921) 906-49-13'
          },
        ],
        CVLink: '',
      },
    }
  ],  
}

export { store };