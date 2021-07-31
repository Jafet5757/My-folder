import React from "react";
import $ from "jquery";

export default function Education() {
  const changeActive = (id) => {
    $(".activate-list-group").removeClass("bg-red text-white border-color-red");
    $("#" + id).addClass(
      "bg-red text-white border-color-red activate-list-group"
    );
  };

  return (
    <div className="container mb-3">
      <p className="text-center middle-text my-3">Education</p>

      <div class="row mt-5">
        <div class="col-md">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action bg-red text-white activate-list-group"
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
              onClick={() => changeActive("list-home-list")}
            >
              Programming Technician
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="profile"
              onClick={() => changeActive("list-profile-list")}
            >
              Google activate
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="messages"
              onClick={() => changeActive("list-messages-list")}
            >
              Artificial intelligence engineering
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="settings"
              onClick={() => changeActive("list-settings-list")}
            >
              Courses without certification
            </a>
          </div>
        </div>
        <div class="col-md mt-3">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <p>
                <b><a href="https://www.ipn.mx/" className="text-red">National Polytechnic Institute</a></b> <br />
                <p className="text-grey">Mexico, high school</p>
                <p className="text-grey">
                  Juan de Dios Batiz Paredes N ° 9 Center for Scientific and
                  Technological Studies
                </p>
              </p>
              <p className="text-grey">2018 - 2021</p>
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <p>
                <b><a href="https://learndigital.withgoogle.com/activate/courses" className="text-red">Google activate</a></b>
              </p>
              <ul className="text-grey">
                <li>
                  Web Development Certificate I
                  <br />
                  &nbsp;&nbsp;21/04/2020
                </li>
                <li>
                  Web Development Certificate II
                  <br />
                  &nbsp;&nbsp;26/04/2020
                </li>
                <li>
                  Cybersecurity certificate in teleworking
                  <br />
                  &nbsp;&nbsp;20/06/2021
                </li>
                <li>
                  Digital Marketing Certificate
                  <br />
                  &nbsp;&nbsp;10/07/2021
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <p>
							<b><a href="https://www.ipn.mx/" className="text-red">National Polytechnic Institute</a></b> <br />
                <p className="text-grey">Mexico, University</p>
                <p className="text-grey">Computer College</p>
              </p>
              <p className="text-grey">2021 - 2025</p>
            </div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              <ul className="text-grey">
                <li>React courses</li>
                <li>English courses</li>
                <li>MERN development courses</li>
                <li>Java course</li>
                <li>Python course</li>
                <li>JavaScript course</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
