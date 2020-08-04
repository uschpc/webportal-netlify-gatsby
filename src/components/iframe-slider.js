import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'gatsby';

const content = [
    {
      title: 'System load mean',
      src: "https://d2zckdyoh6khem.cloudfront.net/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=300s&var-host=All&panelId=3"
    },
    {
      title: 'Load Chart',
      src: "https://hpcaccount.usc.edu/static/status/loadchart.html"
    },
    {
      title: 'Job Chart',
      src: "https://hpcaccount.usc.edu/static/status/jobchart.html"
    }
  ];

const IframeSlider = () => {
	return (
      <Slider className="slider-wrapper" duration="0">
        {content.map((item, index) => (
          <div>
            <h2>{item.title}</h2>
            <iframe
              key={index}
              className="homepage-model"
              src={item.src}
            >
            </iframe>
          </div>
        ))}
    </Slider>
    )
}

export default IframeSlider;
