import React from "react";

export default function Start() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md mt-5">
          <p className="big-text text-dark">
            HELLO <br /> I AM JAFET
          </p>
          <p className="text-grey">Web developer</p>
          <p className="text-grey">
            Experience in web development, BBDD, WebServices, security and
            optimization.
          </p>
          <a className="btn bg-red text-white mt-3" href="#contact">
              Contact me &nbsp;&nbsp;<i class="far fa-paper-plane"></i>
          </a>
        </div>
        <div className="col-md mt-5">
          <center>
            <img className="size-image-middle mt-md-5" src="/img/jafet.png" alt="My face"/>
          </center>
        </div>
      </div>
    </div>
  );
}
