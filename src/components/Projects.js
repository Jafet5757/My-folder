import React from "react";
import Card from './Card';

export default function Projects() {

  const projectsDescription = [
    "Web system to register student attendance in a virtual or real classroom",
    "Web system for free courses based on youtube playlists and generating profits for creators",
    "Desktop system for virtual stores with accounts for administrators, employees, searches and more",
    "Is a web game based on the classic tic-tac-toe but virtual game to play and talk with friends"
  ]

  //{title, description, imgs, techs, goal, urls}
  const dataProjects = [
    //WebList
    {
      title: 'WebList',
      des: projectsDescription[0],
      imgs: [
        'pw1.png',
        'pw2.png',
        'pw3.png',
        'pw4.png'
      ],
      techs: [
        'Bootstrap',
        'Jquery',
        'Node.js',
        'Adobe XD',
        'HTML',
        'CSS',
        'JavaScript',
        'Ajax',
        'Crypto',
        'Express.js',
        'EJS',
        'MySQL',
        'JWT',
        'Nodemailer',
        'Socket.io',
        'Python',
        'Java',
        'SKlearn',
        'morris.js'
      ], 
      goal: 'Registering the attendance of students within a classroom, ideal for a virtual environment, keeps the records safe in databases, available to consult at any time, and easy to visualize with graphs',
      urls:[
        'https://github.com/DeepTure/',//github
        'Not available'//web
      ]
    },
    //For education
    {
      title:'For education',
      des: projectsDescription[1],
      imgs:[
        'pf1.png',
        'pf2.png',
        'pf3.png',
        'pf4.png',
        'pf5.png'
      ],
      techs:[
        'Bootstrap',
        'Jquery',
        'Java',
        'Adobe XD',
        'HTML',
        'CSS',
        'JavaScript',
        'JWP',
        'SQLserver',
        'FontAwesome'
      ],
      goal:'Promote free education and quality educational content stored on the YouTube platform, where everyone can create and share knowledge',
      urls:[
        'https://github.com/Jafet5757/For-education',
        'https://for-education.herokuapp.com/'
      ]
    },
    //Virtual shop
    {
      title:'On-line shop',
      des: projectsDescription[2],
      imgs: [
        'pt1.png',
        'pt2.png',
        'pt3.png'
      ],
      techs: [
        'Java',
        'MySQL',
        'MVC',
        'JDBC',
        'POO'
      ],
      goal: 'It is a desktop sales system based on existing web systems, it has much faster loading speed as it is a desktop application, but the disadvantage of having to install it. It was a personal project to increase knowledge and test my knowledge in desktop application development.',
      urls:[
        'https://github.com/Jafet5757/Sistema-tiendas-virutales-de-escritorio',
        'Not avalible'
      ]
    },
    //Tic tac
    {
      title: 'Tic-tac-toe',
      des: projectsDescription[3],
      imgs: [
        'pg1.png',
        'pg2.png',
        'pg3.png',
        'pg4.png'
      ],
      techs: [
        'Socket.io',
        'Bootstrap',
        'Node.js',
        'EJS',
        'Express',
        'scrollreveal',
        'JQuery',
        'HTML',
        'CSS',
        'JavaScript',
        'Mongo DB'
      ], 
      goal: 'Real-time game to hang out with friends, ideal for boring virtual classes, you can communicate with your friends by chat and create virtual game rooms. This idea was carried out in a fit of boredom in virtual classes due to the covid-19 pandemic',
      urls: [
        'https://github.com/Jafet5757/Juego-gato',
        'https://gato-real-time.herokuapp.com/'
      ]
    }
  ];

  const fromDataToUrl = (position) => {
    const data = dataProjects[position];
    let url = '/'+data.title;
    url += '/'+(data.des);
    url += '&'+data.imgs;
    url += '&'+data.techs;
    url += '&'+data.goal;
    url += '&'+data.urls[0].replaceAll('/','_');
    url += ','+data.urls[1].replaceAll('/','_');

    return url;
  }

	//Hacer cambios en el diseño, no hay carrusel compatible
  return (
    <div className="container mt-5 pt-3 pl-5">
      <p className="middle-text text-center mb-5" id="projects">Projects</p>
      <div className="row">
        <div className="col-md pt-3">
          <Card img={'img/pw2.png'} alt="project weblist" title="WebList" des={projectsDescription[0]} href={fromDataToUrl(0)}/>
        </div>
        <div className="col-md pt-3">
          <Card img={'img/pf1.png'} alt="project for education" title="For education" des={projectsDescription[1]} href={fromDataToUrl(1)}/>
        </div>
      </div>
      <div className="row mt-md-5 pt-3">
        <div className="col-md">
          <Card img={'img/pt3.png'} alt="project virtual shop" title="On-line shop" des={projectsDescription[2]} href={fromDataToUrl(2)}/>
        </div>
        <div className="col-md pt-3">
          <Card img={'img/pg1.png'} alt="project tic-tac-toe" title="Tic-tac-toe" des={projectsDescription[3]} href={fromDataToUrl(3)}/>
        </div>
      </div>
    </div>
  );
}
