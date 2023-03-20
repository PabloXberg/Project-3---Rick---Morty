import Carousel from 'react-bootstrap/Carousel';
import imgslide from '../image/wp6737033-rick-and-morty-portal-wallpapers.jpg'
// import imgslide from '../image/giphy.gif'
import imagen from '../image/wallpaperflare.com_wallpaper.jpg'
// import imagen from '../image/UR73.gif'
import imagen2 from '../image/wp4945601-rick-and-morty-computer-wallpapers.jpg'
// import imagen2 from '../image/1V48.gif'


function Slide() {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item>
        <img
          className="w-100 h-50 SlidePx"
          src={imagen} 
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Rick on his Toillet</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={imgslide}className="w-100 h-50 SlidePx p-relative" alt="Avatar"></img>

        <Carousel.Caption>
             <p>Peace Among Worlds!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 h-50 SlidePx"
          src={imagen2}
          alt="Third slide"
        />

        <Carousel.Caption>
             <p>
           Travelling on the Green Portal
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;