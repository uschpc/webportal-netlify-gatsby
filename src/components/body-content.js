import React from 'react';
import FeatureStories from './feature-stories.js';
import ServiceBox from './service-box.js';
import LatestNews from './latest-news.js';
import UpcomingEvents from './upcoming-events.js';

const BodyContent = () => {
    return (
        <div className="region usc-hpc">
            <div className="services-block">
            <div className="view view-services">
                <div className="view-content">
                    <div className="bg-image">
                        <div className="content">
                            <div class="title">
                                Advanced Research Computing
                            </div>
                            <div className="mission">
                                {/* <a href="#">View Mission</a> */}
                                <button className="mission-btn">View Mission</button>
                            </div>
                        </div>
                    </div>
                    <ServiceBox />
                    <div className="content-container">
                        <FeatureStories />
                        <LatestNews />
                        <UpcomingEvents />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BodyContent;