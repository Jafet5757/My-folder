import React from "react";

export default function Contact() {
  return (
    <div className="bg-grey py-1">
      <form className="container mt-5" id="contact">
        <div className="row my-4">
          <div className="col-md">
            <i class="fas fa-phone text-red mx-3"></i>
            <color className="text-grey">5574751876</color>
          </div>
          <div className="col-md">
            <input type="text" placeholder="Name" className="form-control" />
          </div>
          <div className="col-md">
            <input
              type="text"
              placeholder="Last name"
              className="form-control"
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
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <button className="btn bg-red text-white px-4">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}
