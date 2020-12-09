import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';

const content = [
  {
    title: "December Maintenance and Winter Recess Schedule",
    description:
      "Winter recess runs December 25-January 4, with maintenance occuring from December 27",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/holiday-recess-maintenance-downtime",
    image: "/images/holiday_graphic2.jpg"
  },
  {
    title: "New Condo Cluster Program Officially Launches",
    description:
      "New program offers greater flexibility, with two ownership models for dedicated compute nodes",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/new-condo-cluster-program-launches",
    image: "/images/slider-image-2-small.jpg"
  },
  {
    title: "CARC and Researchers Benefit from Reciprocal Partnerships",
    description:
      "Resources, research grants, and system testing are perks of collaborating with the CARC",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/carc-research-partnerships-benefits",
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
