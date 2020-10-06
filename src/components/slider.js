import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';

const content = [
  {
    title: "CARC and Researchers Benefit from Reciprocal Partnerships",
    description:
      "Resources, research grants, and system testing are perks of collaborating with the CARC",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/carc-research-partnerships-benefits",
    image: "/images/slider-image-1-small.jpg"
  },
  {
    title: "USC's Center for Advanced Research Computing (CARC) Officially Launches",
    description:
      "Name change from HPC highlights the research-focused nature of the department",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/carc-name-change",
    image: "/images/slider-image-2-small.jpg"
  },
  {
    title: "Exploring New Features on the CARC Website",
    description:
      "New website has an updated design and many new features for users",
    button: "Read More",
    url: "/news-and-events/news-and-announcements/website-new-features",
    image: "/images/slider-image-4-small.jpg"
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
