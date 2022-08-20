import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Shop",
    url: "/shop",
  },
  {
    id: 3,
    text: "Cart",
    url: "/cart",
  },
];
const socialLinks =[
  {
    id:1,
    icon: <FaGithub/>,
    url: 'http://www.github.com/daniel-dunsin',
  },
  {
    id:2,
    icon: <FaLinkedin/>,
    url: 'https://www.linkedin.com/in/daniel-adejare-551a20237',
  },
  {
    id:3,
    icon: <FaEnvelope/>,
    url: 'mailto:adejaredaniel12@gmail.com',
  }
]
export {links, socialLinks};