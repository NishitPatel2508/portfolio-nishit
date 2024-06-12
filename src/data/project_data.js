import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
// import { TbBrandReactNative } from "react-icons/tb";
// import { SiAdobexd } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import reactjsimg from "../assets/reactjsimg.png"
import brainwave from "../assets/brainwave.png"
import t1 from "../assets/t1.png"

export const project_data = [    { 
    id:1,
    title: 'Temmplate 1',
    image: `${t1}`,
    category:"Frontend",
    data:{
       description: `This template made with HTML,Css, JavaScript and Bootstrap.`,
       demoLink: "https://nishitpatel2508.github.io/template1/",
    },
    stack:[
      {
        name:"HTML",
        icon: <SiHtml5/>,
        iconColor:"red",
      },
      {
        name:"CSS",
        icon: <IoLogoCss3/>,
        iconColor:"red",
      },
      {
        name:"JavaScript",
        icon: <IoLogoJavascript/>,
        iconColor:"#F0DB4F",
      },
      {
        name:"Bootstrap",
        icon: <FaBootstrap/>,
        iconColor:"Blue",
      },
    ]
  },
  {
    id:2,
    title: 'Password Generator',
    image: `${reactjsimg}`,
    category:"Frontend",
    data:{
      description:`This project is made with React Library. User can generate their password according their requirement of length of password, number and special charator. `,
      demoLink: "https://nishitpatel2508.github.io/passwordgenerator/",
    },
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:3,
    title: 'Brainwave - Online Learning platform for Skill Development',
    image: `${brainwave}`,
    category:"Fullstack",
    data:{
      description: `OLPSD aims to bridge this gap by offering a comprehensive solution that leverages 
      technology to provide interactive, personalized, and engaging learning experiences 
      across various domains..`,
      demoLink: "https://google.com/",
    },
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
      // {
      //   name:"MongoDBT",
      //   icon: <SiMongodb/>,
      // },
      // {
      //   name:"MongoDBT",
      //   icon: <SiMongodb/>,
      // },
      // {
      //   name:"MongoDBT",
      //   icon: <SiMongodb/>,
      // },
    ]
  },
  // {
  //   id:4,
  //   title: 'Project Management application',
  //   image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
  //   category:"Fullstack",
  //   data:{
  //     description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
  //     Elevate your project management experience and achieve success with ease.`,
  //     demoLink: "https://google.com/",
  //   },
  //   stack:[
  //     {
  //       name:"React Native",
  //       icon: <TbBrandReactNative/>,
  //       iconColor:"skyblue",
  //     },
  //     {
  //       name:"NodeJs",
  //       icon: <FaNodeJs/>,
  //       iconColor:"green",
  //     },
  //     {
  //       name:"ExpressJs",
  //       icon: <SiExpress/>,
  //     },
  //     {
  //       name:"MongoDB",
  //       icon: <SiMongodb/>,
  //       iconColor:"limegreen",
  //     },
  //   ]
  // },
  // {
  //   id:5,
  //   title: 'Mobile bank - App Design',
  //   image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
  //   category:"Frontend",
  //   data:{
  //     description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
  //     demoLink: "https://google.com/",
  //   },
  //   stack:[
  //     {
  //       name:"Figma",
  //       icon: <CgFigma/>,
  //       iconColor:"orangered",
  //     },
  //   ]
  // },
  // {
  //   id:6,
  //   title: 'Quiz App Development',
  //   image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
  //   category:"Apps",
  //   data:{
  //     description: `Elevate engagement and knowledge retention with our Quiz App 
  //     Development project. Seamlessly crafted for interactive learning 
  //     experiences, our app offers customizable quizzes, real-time feedback, 
  //     and captivating visuals. `,
  //     demoLink: "https://google.com/",
  //   },
  //   stack:[
  //     {
  //       name:"React Native",
  //       icon: <TbBrandReactNative/>,
  //       iconColor:"skyblue",
  //     },
  //     {
  //       name:"NodeJs",
  //       icon: <FaNodeJs/>,
  //       iconColor:"green",
  //     },
  //     {
  //       name:"ExpressJs",
  //       icon: <SiExpress/>,
  //     },
  //     {
  //       name:"MongoDB",
  //       icon: <SiMongodb/>,
  //       iconColor:"limegreen",
  //     },
  //   ]
  // },
]