import React from 'react';
import FeatureStories from './feature-stories.js';
import ServiceBox from './service-box.js';
import LatestNews from './latest-news.js';
import UpcomingEvents from './upcoming-events.js';
import { Link } from 'gatsby';

const BodyContent = ({news, featureStory, featureBoxes}) => {
    return (
        <div className="region usc-hpc">
            <div className="services-block">
            <div className="view view-services">
                <div className="view-content">
                    <ServiceBox {...featureBoxes} />
                    <div className="content-container">
                        <FeatureStories {...featureStory }/>
                        <LatestNews {...news } />
                        <UpcomingEvents />
                    </div>
                    <div className="bg-image">
                        <div className="content">
                            <div className="title">
                            The University of Southern California’s Center for Advanced Research Computing supports the computational exploration of over 100 research groups from a variety of academic disciplines.
                            </div>
                            <div className="mission">
                                {/* <a href="#">View Mission</a> */}
                                <button className="mission-btn"><Link to="/about/mission/">View Mission</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BodyContent;
