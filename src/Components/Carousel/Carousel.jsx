import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner row">
          <div class="carousel-item active">
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="https://www.babybrandsdirect.co.uk/sysimages/headerbannerimages/resize/Barbie-Movie-2023-NEW-Dolls-Playsets-at-Baby-Brands-Direct-464.jpg?tick=638308909318792287"
                class="img-fluid Carousel"
                alt="Slide 1"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
        
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/kmargso/Baby/Ingress_PC.png"
                class="img-fluid Carousel"
                alt="Slide 2"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              {/* Caption content */}
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex justify-content-center align-items-center">
              <img
                src="https://www.babybrandsdirect.co.uk/sysimages/headerbannerimages/resize/Barbie-Movie-2023-NEW-Dolls-Playsets-at-Baby-Brands-Direct-464.jpg?tick=638308909318792287"
                class="img-fluid Carousel"
                alt="Slide 3"
              />
            </div>
            <div class="carousel-caption d-none d-md-block">
              {/* Caption content */}
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Carousel;
