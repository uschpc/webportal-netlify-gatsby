import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
    {
      title: "Center for High-Performance Computing",
      description:
        "A new partnership offers computing resources for research into the novel coronavirus.",
      button: "Learn More",
      image: "https://i.imgur.com/DCdBXcq.jpg"
    },
    {
      title: "HPC at SC19",
      description:
        "The HPC team attended SC19–the International Conference for High-Performance Computing, Networking, Storage and Analysis—from November 18–21, 2019.",
      button: "Learn More",
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

const Carsoul = () => {
	return (
        <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button className="slider-btn">{item.button}</button>
          </div>
        </div>
      ))}
    </Slider>
    )
}

export default Carsoul;