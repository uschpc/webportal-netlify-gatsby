import React from 'react';
import Announcement from './Announcement-column.js';
import ServiceBox from './service-box.js';
import LatestNews from './latest-news.js';
import SystemStatus from './system-status.js';
import { Link } from 'gatsby';
import window from 'global'

const BodyContent = (props) => {
    let isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent) || false
    const openModel = () => {
        props.openModel(true)
    }
    return (
        <div className="region usc-hpc">
            <div className="services-block">
                <div className="view view-services">
                    <div className="view-content">
                        <ServiceBox {...props.featureBoxes} />
                        <div className="content-container">
                            <Announcement {...props.featureStory } announcements={props.Announcements}/>
                            <LatestNews {...props.news } isSafari={isSafari} />
                            <SystemStatus openModel={openModel}/>
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
