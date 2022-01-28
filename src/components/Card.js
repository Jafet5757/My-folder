import React from "react";
import { Link } from 'react-router-dom'

export default function Card({img, alt, title, des, href}) {
  return (
    <div>
      <div class="card mx-auto" style={{width: '18rem'}}>
        <img src={img} class="card-img-top" alt={alt} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {des}
          </p>
          <Link to={href} class="btn bg-red text-white">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
