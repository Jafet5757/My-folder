import React from "react";

export default function Banner() {
  return (
    <div className="container my-5 py-5 pl--5">
      <div className="bg-red banner-box">
        <div className="row">
          <div className="col-5-md img-aux">
            <img
              src="img/bg-clear.png"
              alt="i'm on a mural"
              className="img-banner"
            />
          </div>
          <div className="col-md text-white">
            <p className="middle-text text-center mt-4">You have a project</p>
            <p className="mx-5 mt-5" style={{ fontSize: "18px" }}>
              You can contact me for projects or companies, I am a person who
              loves his work and learning in teams or independently.
            </p>
            <a className="btn btn-light ml-5 mt-5">
              Contact me &nbsp;&nbsp;<i class="far fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
