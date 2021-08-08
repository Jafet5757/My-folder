import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import Modal from "./Modal";
import $ from "jquery";

export default function Contact() {
  //inputs
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  init("user_3R4LsWXs73xLreslMqqSp");

  const sendMessage = () => {
    emailjs.send("service_g6ye74t", "template_zw2e0y8", {
      fromName: name + " " + lastName,
      message: message,
      company: company,
    });
    $("#name").val("");
    $("#last").val("");
    $("#from").val("");
    $("#message").val("");
  };

  //functions on changes
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="bg-grey py-1">
      <Modal />
      <div className="container mt-5" id="contact">
        <div className="row d-block d-sm-block d-md-none">
          <div className="col pl-5">
            <p>
              <i class="fas fa-phone text-red mx-3"></i>
              <color className="text-grey">5574751876</color>
            </p>
            <p>
              <i class="fas fa-envelope-open-text text-red mx-3"></i>
              <color className="text-grey">moranorozcokevinjafet@gmail.com</color>
            </p>
            <p>
              <i class="fas fa-map-marker-alt text-red mx-3"></i>
              <color className="text-grey">Mexico, Mexico City</color>
            </p>
            <p>
              <i class="fab fa-github text-red mx-3"></i>
              <a href="https://github.com/Jafet5757" className="text-grey">Jafet5757</a>
            </p>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md d-contact">
            <i class="fas fa-phone text-red mx-3"></i>
            <color className="text-grey">5574751876</color>
          </div>
          <div className="col-md">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={onChangeName}
              id="name"
            />
          </div>
          <div className="col-md m-2-little">
            <input
              type="text"
              placeholder="Last name"
              className="form-control"
              onChange={onChangeLastName}
              id="last"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4 d-contact">
            <i class="fas fa-envelope-open-text text-red mx-3"></i>
            <color className="text-grey">moranorozcokevinjafet@gmail.com</color>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Projet or company"
              onChange={onChangeCompany}
              id="from"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4 d-contact">
            <p>
              <i class="fas fa-map-marker-alt text-red mx-3"></i>
              <color className="text-grey">Mexico, Mexico City</color>
            </p>
            <p>
              <i class="fab fa-github text-red mx-3"></i>
              <a href="https://github.com/Jafet5757" className="text-grey">Jafet5757</a>
            </p>
          </div>
          <div className="col-md-8">
            <textarea
              className="form-control"
              placeholder="Message"
              rows="5"
              onChange={onChangeMessage}
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-8">
            <button
              className="btn bg-red text-white px-4"
              onClick={sendMessage}
              type="button"
              data-toggle="modal"
              data-target="#modal"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
