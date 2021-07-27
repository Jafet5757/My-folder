import React from "react";
import Card from './Card';

export default function Projects() {

  const projectsDescription = [
    "Web system to register student attendance in a virtual or real classroom",
    "Web system for free courses based on youtube playlists and generating profits for creators",
    "Desktop system for virtual stores with accounts for administrators, employees, searches and more",
    "Is a web game based on the classic tic-tac-toe but virtual game to play and talk with friends"
  ]

	//Hacer cambios en el diseño, no hay carrusel compatible
  return (
    <div className="container mt-5 pt-3 pl-5">
      <p className="middle-text text-center mb-5">Projects</p>
      <div className="row">
        <div className="col-md pt-3">
          <Card img={'img/pw2.png'} alt="project weblist" title="WebList" des={projectsDescription[0]} href="#"/>
        </div>
        <div className="col-md pt-3">
          <Card img={'img/pf1.png'} alt="project for education" title="For education" des={projectsDescription[1]} href="#"/>
        </div>
      </div>
      <div className="row mt-md-5 pt-3">
        <div className="col-md">
          <Card img={'img/pt3.png'} alt="project virtual shop" title="On-line shop" des={projectsDescription[2]} href="#"/>
        </div>
        <div className="col-md pt-3">
          <Card img={'img/pg1.png'} alt="project tic-tac-toe" title="Tic-tac-toe" des={projectsDescription[3]} href="#"/>
        </div>
      </div>
    </div>
  );
}
