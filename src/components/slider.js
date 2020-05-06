import React, { Component } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const content = [
    {
      title: "Center for High-Performance Computing",
      description:
        "A new partnership offers computing resources for research into the novel coronavirus.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg"
    },
    {
      title: "HPC at SC19",
      description:
        "The HPC team attended SC19–the International Conference for High-Performance Computing, Networking, Storage and Analysis—from November 18–21, 2019.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg"
    },
    {
      title: "Excellence Across the Disciplines",
      description:
        "HPC bridges USC’s unique strengths in scientific computing, computer science, and communications by supporting research groups in a variety of disciplines.",
      button: "Learn More",
      image: "https://i.imgur.com/DvmN8Hx.jpg"
    }
  ];

class Carsoul extends Component {

render() {

  const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />
      }
    };

    return (<Slider {...settings}>
        {content.map((item, index) => (
            <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
            >
                <img src={item.image} />
            {/* <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
            </div> */}
            </div>
        ))}
    </Slider>)
  }
}

export default Carsoul;