import React, { Component } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const content = [
    {
      title: "HPC Slide 1",
      description:
        "A new partnership offers computing resources for research into the novel coronavirus.",
      button: "Read More",
      image: "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg"
    },
    {
      title: "HPC Slide 2",
      description:
        "The HPC team attended SC19–the International Conference for High-Performance Computing.",
      button: "Discover",
      image: "https://coolbackgrounds.io/images/backgrounds/white/white-radial-gradient-a5802da1.jpg"
    },
    {
      title: "HPC Slide 3",
      description:
        "HPC bridges USC’s unique strengths in scientific computing, computer science, and communications.",
      button: "Learn More",
      image: "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg"
    }
  ];

class Carsoul extends Component {

render() {

  const settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: true,
      cssEase: 'ease-in-out',
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={50} />
      }
    };

    return (<Slider {...settings}>
        {content.map((item, index) => (
            <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
            >
                <div>
                    <img src={item.image}/>
                </div>
                <div class="entry-content">
                    <header class="entry-header">
                        <h1 class="entry-title"><a href="https://news.usc.edu/168870/usc-department-public-safety-officers-support-staff-covid-19/" data-analytics-action="click" data-analytics-label="Feature Title: Patrolling a pandemic">{item.title}</a></h1></header>
                    <div class="entry-summary">
                        <p>{item.description}</p>
                    </div>
                    <footer class="entry-footer">
                    </footer>
                </div>
            </div>
        ))}
    </Slider>)
  }
}

export default Carsoul;