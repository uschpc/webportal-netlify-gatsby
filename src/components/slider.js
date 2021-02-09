import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';

const content = [
  {
    title: "HackSC Connects the World in 2021",
    description:
      "USC’s largest hackathon goes virtual this month with a theme of connectivity",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/hacksc-2021-connects-the-world",
    image: "/images/slider-image-1-small.jpg"
  },
  {
    title: "Spring 2021 CARC Workshops Cover New Topics",
    description:
      "This semester, register for courses covering job automation, software containers, job management, and more",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/spring-2021-workshop-schedule",
    image: "/images/slider-image-books-small.jpg"
  },
  {
    title: "New Condo Cluster Program Officially Launches",
    description:
      "New program offers greater flexibility, with two ownership models for dedicated compute nodes",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/new-condo-cluster-program-launches",
    image: "/images/slider-image-2-small.jpg"
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
              <button className="slider-btn"><Link to={item.url}>{item.button}</Link></button>
            </div>
          </div>
        ))}
    </Slider>
    )
}

export default Carsoul;
