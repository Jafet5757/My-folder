import React from "react";

export default function presentation(props) {
  //imgs
  return (
    <div className="my-5 mx-auto size-carousel">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          {
            props.imgs.map((img, i)=>(
              i===0 ? <div class="carousel-item active">
                        <img src={'/img/'+img} class="d-block w-100" alt="of-project" />
                      </div> : 
                      <div class="carousel-item">
                        <img src={'/img/'+img} class="d-block w-100" alt="of-project" />
                      </div>
            ))
          }
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
