// arm chair
import armChair1 from './images/arm chair 1.png';
import armChair2 from './images/arm chair 2.png';
import armChair3 from './images/arm chair 3.png';
import armChair4 from './images/arm chair 4.png';

// T-shirt
import tShirt1 from './images/cloth 1.jpg';
import tShirt2 from './images/cloth 2.jpg';
import tShirt3 from './images/cloth 3.jpg';
import tShirt4 from './images/cloth 4.jpg';

// home accessories
import homeAccessories1 from './images/home accessories 1.jpg';
import homeAccessories2 from './images/home accessories 2.jpg';
import homeAccessories3 from './images/home accessories 3.jpg';
import homeAccessories4 from './images/home accessories 4.jpg';

// on boarding Jackets
import onBoardingJacket1 from './images/cloth 5.jpg';
import onBoardingJacket2 from './images/cloth 6.jpg';
import onBoardingJacket3 from './images/cloth 7.jpg';
import onBoardingJacket4 from './images/cloth 8.jpg';

// bags
import bag1 from './images/leather bag 1.jpg';
import bag2 from './images/leather bag 2.jpg';
import bag3 from './images/leather bag 3.jpg';
import bag4 from './images/leather bag 4.jpg';
// mordern chair
import mordernChair1 from './images/mordern chair 1.jpg';
import mordernChair2 from './images/mordern chair 2.jpg';
import mordernChair3 from './images/mordern chair 3.jpg';
import mordernChair4 from './images/mordern chair 4.png';

// plant pot 
import plantPot1 from './images/plant pot 1.jpg';
import plantPot2 from './images/plant pot 2.jpg';
import plantPot3 from './images/plant pot 3.jpg';
import plantPot4 from './images/plant pot 4.jpg';

// ankle boots
import ankleBoot1 from './images/shoe 1.jpg';
import ankleBoot2 from './images/shoe 2.jpg';
import ankleBoot3 from './images/shoe 3.jpg';
import ankleBoot4 from './images/shoe 4.jpg';

// table set
import tableSet1 from './images/table set 1.jpg';
import tableSet2 from './images/table set 2.png';
import tableSet3 from './images/table set 3.jpg';
import tableSet4 from './images/table set 4.jpg';

//  home deco 
import homeDeco1 from './images/home deco 1.jpg';
import homeDeco2 from './images/home deco 2.png';
import homeDeco3 from './images/home deco 3.png';
import homeDeco4 from './images/home deco 4.png';

// wooden chair 
import woodenChair1 from './images/wooden chair 1.png';
import woodenChair2 from './images/wooden chair 2.png';
import woodenChair3 from './images/wooden chair 3.png';
import woodenChair4 from './images/wooden chair 4.png';

// trainers 
import trainer1 from './images/shoe 2.jpg';
import trainer2 from './images/shoe 1.jpg';
import trainer3 from './images/shoe 3.jpg';
import trainer4 from './images/shoe 4.jpg';
const data = [
  {
    id: 1,
    title: "arm chair",
    img: armChair1,
    price: 199.99,
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos, rerum odit eveniet eligendi dolore. Magni, doloribus minus. Libero tempora voluptatem aut dolorem cum, totam culpa pariatur quisquam soluta.",
    otherImg: [
      armChair1,
      armChair2,
      armChair3,
      armChair4,
    ],
    sizes: ["3xl", "4xl"],
    colors: ["white", "blue", "darkred"],
    categories: ["chair"],
    inCart: false,
    count: 0,
    total: 0,
    stars: 4,
  },
  {
    id: 2,
    title: "Stylish T-shirts",
    img: tShirt1,
    price: 87.99,
    info: "Magni omnis voluptates, itaque consequatur, totam saepe dignissimos non, incidunt illum esse ea nisi vitae eveniet. Perferendis nam temporibus rerum quam dignissimos fugiat quasi consequuntur ex iure recusandae qui impedit asperiores mollitia earum cum repellendus autem quisquam at, velit eos iusto ratione? ",
    otherImg: [
      tShirt1,
      tShirt2,
      tShirt3,
      tShirt4,
    ],
    inCart: false,
    sizes: ["xs", "sm", "md"],
    colors: ["grey", "brown", "blue", "red"],
    categories: ["cloth"],
    count: 0,
    total: 0,
    stars: 3,
  },
  {
    id: 3,
    title: "Home Accesories",
    img: homeAccessories1,
    price: 45.99,
    info: "Magni omnis voluptates, itaque consequatur, totam saepe dignissimos non, incidunt illum esse ea nisi vitae eveniet. Perferendis nam temporibus rerum quam dignissimos fugiat quasi consequuntur ex iure recusandae qui impedit asperiores mollitia earum cum repellendus autem quisquam at, velit eos iusto ratione?",
    otherImg: [
      homeAccessories1,
      homeAccessories2,
      homeAccessories3,
      homeAccessories4,
    ],
    inCart: false,
    sizes: ["md", "2xl", "xl"],
    colors: ["white", "yellow", "red", "purple"],
    categories: ["accessories"],
    count: 0,
    total: 0,
    stars: 5,
  },
  {
    id: 4,
    title: "Onboarding Jackets",
    img: onBoardingJacket1,
    price: 65.99,
    info: "Repellat itaque a iure explicabo at ut, dolorem obcaecati corporis necessitatibus saepe voluptate illo cupiditate molestiae quam, magnam officiis eum fugiat impedit voluptates. Ipsam consectetur magni quae odio aut unde perspiciatis, possimus deserunt itaque. Asperiores eos necessitatibus, illo eligendi, corrupti.",
    otherImg: [
      onBoardingJacket1,
      onBoardingJacket2,
      onBoardingJacket3,
      onBoardingJacket4,
    ],
    inCart: false,
    sizes: ["md", "2xl", "3xl"],
    colors: ["white", "orange", "purple"],
    categories: ["cloth"],
    count: 0,
    total: 0,
    stars: 1,
  },
  {
    id: 5,
    title: "Backpacks & Leather Bags",
    img: bag1,
    price: 32.99,
    info: "Repellat itaque a iure explicabo at ut, dolorem obcaecati corporis necessitatibus saepe voluptate illo cupiditate molestiae quam, magnam officiis eum fugiat impedit voluptates. Ipsam consectetur magni quae odio aut unde perspiciatis,",
    otherImg: [
      bag1,
      bag2,
      bag3,
      bag4,
    ],
    inCart: false,
    sizes: ["sm", "xl"],
    colors: ["green", "black", "white"],
    categories: ["bag"],
    count: 0,
    total: 0,
    stars: 3,
  },
  {
    id: 6,
    title: "Mordern Chair",
    img: mordernChair1,
    price: 156.99,
    info: "Repellat itaque a iure explicabo at ut, dolorem obcaecati corporis necessitatibus saepe voluptate illo cupiditate molestiae quam, magnam officiis eum fugiat impedit voluptates. Ipsam consectetur magni quae odio aut unde perspiciatis, possimus deserunt itaque. Asperiores eos necessitatibus.",
    otherImg: [
      mordernChair1,
      mordernChair2,
      mordernChair3,
      mordernChair4,
    ],
    inCart: false,
    sizes: ["3xl", "4xl"],
    colors: ["green", "white"],
    categories: ["chair"],
    count: 0,
    total: 0,
    stars: 5,
  },
  {
    id: 7,
    title: "Plant Pot",
    img: plantPot1,
    price: 53.99,
    info: "Exercitationem, impedit aperiam. Corporis quo sapiente magnam, incidunt possimus facilis in exercitationem unde suscipit maiores pariatur. Officiis illo quidem, voluptate neque nemo impedit laudantium optio cum ea.",
    otherImg: [
      plantPot1,
      plantPot2,
      plantPot3,
      plantPot4,
    ],
    inCart: false,
    sizes: ["2xl", "3xl"],
    colors: ["green", "white", "grey"],
    categories: ["accessories"],
    count: 0,
    total: 0,
    stars: 1,
  },
  {
    id: 8,
    title: "Ankle Boots",
    img:  ankleBoot1,
    price: 87.99,
    info: "Exercitationem, impedit aperiam. Corporis quo sapiente magnam, incidunt possimus facilis in exercitationem unde suscipit maiores pariatur. Officiis illo quidem, voluptate neque nemo impedit laudantium optio cum ea.",
    otherImg: [
       ankleBoot1,
       ankleBoot2,
       ankleBoot3,
       ankleBoot4,
    ],
    inCart: false,
    sizes: ["sm", "md", "xl", "2xl"],
    colors: ["green", "white", "grey", "blue", "darkred", "black"],
    categories: ['shoe'],
    count: 0,
    total: 0,
    stars: 3,
  },
  {
    id: 9,
    title: "Table & Dining Sets",
    img: tableSet1,
    price: 148.99,
    info: "Exercitationem, impedit aperiam. Corporis quo sapiente magnam, incidunt possimus facilis in exercitationem unde suscipit maiores pariatur. Officiis illo quidem, voluptate neque nemo impedit laudantium.",
    otherImg: [
      tableSet1,
      tableSet2,
      tableSet3,
      tableSet4,
    ],
    inCart: false,
    sizes: ["2xl", "3xl"],
    colors: ["green", "white", "grey"],
    categories: ["table"],
    count: 0,
    total: 0,
    stars: 4,
  },
  {
    id: 10,
    title: "Home Deco",
    img: homeDeco1,
    price: 52.99,
    info: "Laborum, amet excepturi. Doloribus, itaque ducimus harum tempora reprehenderit quisquam beatae non magni eius aut pariatur. Ea, sapiente. Inventore, officiis recusandae? Praesentium dolore dolor eius?",
    otherImg: [
      homeDeco1,
      homeDeco2,
      homeDeco3,
      homeDeco4,
    ],
    inCart: false,
    sizes: ["xs", "sm"],
    colors: ["green", "white", "grey"],
    categories: ["accessories"],
    count: 0,
    total: 0,
    stars: 4,
  },
  {
    id: 11,
    title: "Wooden Chair",
    img:  woodenChair1,
    price: 78.99,
    info: "Laborum, amet excepturi. Doloribus, itaque ducimus harum tempora reprehenderit quisquam beatae non magni eius aut pariatur. Ea, sapiente. Inventore, officiis recusandae? Praesentium dolore dolor eius.",
    otherImg: [
       woodenChair1,
       woodenChair2,
       woodenChair3,
       woodenChair4,
    ],
    inCart: false,
    sizes: ["xl", "4xl"],
    colors: ["green", "white", "grey"],
    categories: ["chair"],
    count: 0,
    total: 0,
    stars: 5,
  },
  {
    id: 12,
    title: "Trainers",
    img: trainer1,
    price: 59.99,
    info: "Exercitationem, impedit aperiam. Corporis quo sapiente magnam, incidunt possimus facilis in exercitationem unde suscipit maiores pariatur. Officiis illo quidem, voluptate neque nemo impedit laudantium.",
    otherImg: [
      trainer1,
      trainer2,
      trainer3,
      trainer4,
    ],
    inCart: false,
    sizes: ["sm", "md", "xl", "2xl"],
    colors: ["purple", "darkred", "black", "lightblue"],
    categories: ["shoe"],
    count: 0,
    total: 0,
    stars: 3,
  },
];

export default data;
