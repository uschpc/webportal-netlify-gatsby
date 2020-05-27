import React from 'react';
import FeatureStories from './feature-stories.js';
import ServiceBox from './service-box.js';
import LatestNews from './latest-news.js';
import UpcomingEvents from './upcoming-events.js';

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
                                Advanced Research Computing
                            </div>
                            <div className="mission">
                                {/* <a href="#">View Mission</a> */}
                                <button className="mission-btn">View Mission</button>
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