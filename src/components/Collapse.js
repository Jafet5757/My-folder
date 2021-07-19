import React, { useState } from "react";
import Item from "./Item";

export default function Collapse(props) {
  const skillsItems = [
    [
      //frontend
      { skill: "HTML", per: 90 },
      { skill: "CSS", per: 70 },
      { skill: "JavaScript", per: 90 },
    ],
    [
      //backend
      { skill: "Node.js", per: 90 },
      { skill: "Java", per: 90 },
      { skill: "Python", per: 75 },
    ],
    [
      //Others
      { skill: "Express", per: 80 },
      { skill: "Bootstrap", per: 90 },
      { skill: "JQuery", per: 80 },
      { skill: "React", per: 70 },
      { skill: "API rest", per: 85 },
      { skill: "Autodidact", per: 100 },
    ],
  ];

  //this change when is clicked collapse
  const [classCollapse, setClassCollapse] = useState('fas fa-chevron-down');

  const changeClass = () => {
	  if(classCollapse==='fas fa-chevron-down'){
		  setClassCollapse('fas fa-chevron-up');
	  }else{
		  setClassCollapse('fas fa-chevron-down');
	  }
  }

  return (
    <div className="mt-5">
      <p>
        <button
          class="btn"
          type="button"
          data-toggle="collapse"
          data-target={"#" + props.id}
          aria-expanded="false"
          aria-controls={props.id}
		  onClick={changeClass}
        >
          <div>
            <i class={props.icon}></i> &nbsp;&nbsp;{props.title}
			<i class={classCollapse+' ml-5 text-red'}></i>
          </div>
        </button>
      </p>
      <div class="col">
        <div class="collapse multi-collapse" id={props.id}>
          <div class="card card-body">
            {
              //Renderiza cada una de las habilidades y su porcentaje
              skillsItems[props.position].map((item) => (
                <Item {...item} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
