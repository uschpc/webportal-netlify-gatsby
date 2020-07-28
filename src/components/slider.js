import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';

const content = [
    {
      title: "Center for High-Performance Computing is now Center for Advanced Research Computing",
      description:
        "Name change highlights the research-focused nature of the department",
      button: "Learn More",
      url: "/news-and-events/news-and-announcements/carc-name-change",
      image: "/images/slider-image-4-small.jpg"
    },
    {
      title: "Upcoming Changes for USC Research Computing: Summer and Fall 2020",
      description:
        "Technical upgrades, increased user support, and exciting new services are planned for the next few months",
      button: "Learn More",
      url: "/news-and-events/news-and-announcements/upcoming-changes-summer-fall-2020",
      image: "/images/slider-image-2-small.jpg"
    },
    {
      title: "White House Announces COVID-19 High Performance Computing Consortium",
      description:
        "New program offers COVID-19 researchers access to high performance computing systems",
      button: "Learn More",
      url: "/news-and-events/news-and-announcements/covid-19-consortium",
      image: "/images/slider-image-1-small.jpg"
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
