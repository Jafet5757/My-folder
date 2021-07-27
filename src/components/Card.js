import React from "react";

export default function Card({img, alt, title, des, href}) {
  return (
    <div>
      <div class="card" style={{width: '18rem'}}>
        <img src={img} class="card-img-top" alt={alt} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {des}
          </p>
          <a href={href} class="btn bg-red text-white">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
