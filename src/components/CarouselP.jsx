import { Carousel } from "react-bootstrap"

const CarouselP = () => {
  return (
    <div className="CarouselP">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.universalformacion.com/images/blog/627e1bd7d7d473.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kionetworks.com/hubfs/ALCHEMYLABS/ethical-hacking.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselP