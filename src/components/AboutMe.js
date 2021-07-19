import React from "react";

export default function AboutMe() {
  return (
    <div className="container my-5 pt-2">
      <p className="text-center middle-text mb-5">About Me</p>
      <div className="row">
        <div className="col-md">
          <img src="/img/circle.png" className="size-image-middle d-block mx-auto" alt="My_image"/>
        </div>
        <div className="col-md">
          <p className="mt-5 text-grey">
            Web developer with experience in backend and frontend, apply
            WebService and databases, knowledge in UX/UI and design.
          </p>
          <a className="btn bg-red text-white mt-4" href="#">
            Download my cv &nbsp;&nbsp;
            <i class="far fa-arrow-alt-circle-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
