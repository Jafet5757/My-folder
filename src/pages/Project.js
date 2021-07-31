import React from "react";
import NavBar from "./../components/NavBar";
import Carousel from "./components/Carousel";
import {Link} from 'react-router-dom'

export default function Project({
  title,
  description,
  imgs,
  techs,
  goal,
  urls,
}) {
  //{title, description, imgs, techs, goal, urls}

  const arrayImgs = imgs.split(",");
  const arrayTechs = techs.split(",");
  const arrayUrls = urls.split(",");
  const git = arrayUrls[0].replaceAll("_",'/');
  const web = arrayUrls[1].replaceAll("_",'/');
  console.log(git, ' : ', web);

  return (
    <div>
      <NavBar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md">
            <p className="big-text">{title}</p>
            <p className="text-grey">{description}</p>
          </div>
          <div className="col-md">
            <img
              src={"/img/" + arrayImgs[0]}
              alt="project"
              className="size-image-big"
            />
          </div>
        </div>

        <div className="row">
          <div className="col p-5">
            <Carousel imgs={arrayImgs} />
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <p className="middle-text text-center">
              Technologies used
            </p>
            <br/>
            <ul className="text-grey">
              {
                arrayTechs.map((tech)=>(
                  <li>{tech}</li>
                ))
              }
            </ul>
          </div>
          <div className="col-md">
            <p className="middle-text text-center">
              Goal
            </p>
            <p className="text-grey">
              {goal}
            </p>
            <p className="middle-text text-center">
              See project
            </p>
            <p className="text-grey">
              Github: <a href={arrayUrls[0].replaceAll('_','/')}>{(arrayUrls[0].replaceAll('_','/'))}</a>
              <br/>
              Web: {
                arrayUrls[1]==='Not available' ? <none>{arrayUrls[1]}</none>
                :
                <a href={arrayUrls[1].replaceAll('_','/')}>{(arrayUrls[1].replaceAll('_','/'))}</a>
              }
            </p>

            <br/>

            <Link to="/" className="btn btn-light mb-5">
            <i class="fas fa-arrow-left"></i> &nbsp;&nbsp;Go back
            </Link>
          </div>
        </div>
      </div> 
    </div>
  );
}
