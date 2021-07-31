import React, {useState} from "react";
import emailjs,{ init } from 'emailjs-com';
import Modal from './Modal'

export default function Contact() {

  //inputs
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  
  const [modalIsActive, setModalActive] = useState(false);

  init("user_3R4LsWXs73xLreslMqqSp");

  const sendMessage = () => {
    /*emailjs.send("service_g6ye74t","template_zw2e0y8",{
      fromName: name+" "+lastName,
      message: message,
      company: company,
    });*/
      setModalActive(true);
  }

  //functions on changes
  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const onChangeCompany = (e) => {
    setCompany(e.target.value);
  }

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className="bg-grey py-1">
      <div className="container mt-5" id="contact">
        <div className="row my-4">
          <div className="col-md">
            <i class="fas fa-phone text-red mx-3"></i>
            <color className="text-grey">5574751876</color>
          </div>
          <div className="col-md">
            <input type="text" placeholder="Name" className="form-control" onChange={onChangeName} />
          </div>
          <div className="col-md">
            <input
              type="text"
              placeholder="Last name"
              className="form-control"
              onChange={onChangeLastName}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4">
            <i class="fas fa-envelope-open-text text-red mx-3"></i>
            <color className="text-grey">moranorozcokevinjafet@gmail.com</color>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Projet or company"
              onChange={onChangeCompany}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4">
            <i class="fas fa-map-marker-alt text-red mx-3"></i>
            <color className="text-grey">Mexico, Mexico City</color>
          </div>
          <div className="col-md-8">
            <textarea
              className="form-control"
              placeholder="Message"
              rows="5"
              onChange={onChangeMessage}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <button className="btn bg-red text-white px-4" onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}