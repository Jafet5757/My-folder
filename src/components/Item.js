import React from "react";

//per refere to percenteage
export default function Item({ skill, per }) {
  /*const style = {
  textAlign: "center",
  fontWeight: "bold",
  marginTop: "50px"
};
 
// function component
const Footer = props => {
  return (
    <footer style={style}>
      <p>Copyright ©</p>
    </footer>
  );
};*/

  return (
    <div>
      <div className="row pt-3">
        <div className="col">
          <p>{skill}</p>
        </div>
        <div className="col">
            <p className="text-right">{per+'%'}</p>
        </div>
      </div>
      <div>
        <div class="progress bg-red-light" style={{ height: "10px" }}>
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            style={{ width: per + "%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}
