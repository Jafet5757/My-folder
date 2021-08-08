import React from "react";

export default function NavBar(props) {
  return (
      <nav className="navbar navbar-expand-lg bg-red navbar-dark navbar-danger" id="nav">
        <a class="navbar-brand text-mode-dark" href="/">
          JKM
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link text-mode-dark" href={props.about}>
                About me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-mode-dark" href={props.skills}>
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-mode-dark" href={props.projects}>
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-mode-dark" href={props.contact}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
