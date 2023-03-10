import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carouselnav() {
  const image1 = new Image();
  image1.src = process.env.PUBLIC_URL + './images/kcvalorant1.jpg';

  const image2 = new Image();
  image2.src = process.env.PUBLIC_URL + './images/kclol1.jpg';

  const image3 = new Image();
  image3.src = process.env.PUBLIC_URL + './images/kcvalorantf1.jpeg';

  return (
    <div className="carousel1" style={{ display: "flex", justifyContent: "center" }}>
    <Carousel className='Item'>
      <Carousel.Item >
        <img
          className="d-block custom-height"
          src={image2.src}
          alt="KC LoL;"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block custom-height"
          src={image1.src}
          alt="KC Valorant"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block custom-height"
          src={image3.src}
          alt="KC Valorant féminin"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carouselnav;
