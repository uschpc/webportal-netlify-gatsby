import React from 'react';

import featureBox from '../feature-boxes.json';

const ServicesBox = () => {
    return (
        <div className="region usc-hpc">
            <div className="services-block">
            <div className="view view-services">
                <div className="view-content">
                    <div id="x-section-5" className="x-section">
                        <div className="marginless-columns" >
                            {
                                featureBox.map(item => {
                                    return <div className="shared">
                                        <a href="#">
                                            <span className="features">{item.title}</span>
                                            <span className="copy-text">{item.content}</span>
                                        </a>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="shared press-release">
                            <h2>Featured Story</h2>
                            <div className="press-news-block">
                                <div className="block">
                                    <h3 className="title">A Business-Savvy Storyteller</h3>
                                    <img src="https://iamachild.files.wordpress.com/2013/06/the-storyteller1.jpg"></img>
                                    <h4 className="copy-text">From a remote island campus, <a href="#">Read More</a></h4>
                                </div>
                                
                                <div className="block">
                                    <img src="https://i.ytimg.com/vi/kdw2A9ZpoTo/maxresdefault.jpg"></img>
                                    <h3 className="title">CONFLUX</h3>
                                    <h4 className="copy-text">Combining Big Data and HPC, <a href="#">Read More</a></h4>
                                </div>
                            </div>
                            </div>
                        <div className="shared news">
                            <h2>Latest News</h2>
                            <div className="press-news-block">
                                <div className="block">
                                    <h3 className="title">MSI PIs Elected Fellows of the American Academy of Arts and Sciences</h3>
                                    <img src="https://blog.netapp.com/wp-content/uploads/2018/08/Twitter-Image-1024x512.jpg"></img>
                                    <h4 className="copy-text">Two MSI PIs have been elected to as Fellows of the American Academy, <a href="#">Read More</a></h4>
                                </div>
                                
                                <div className="block">
                                    <img src="https://www.stulz-usa.com/fileadmin/_processed_/b/2/csm_STULZ-Micro-Data-Center-Press-Release_0fe6a42bab.jpg"></img>
                                    <h3 className="title">May 2020 Maintenance</h3>
                                    <h4 className="copy-text">A global system reservation will start at 5:00 a.m. on May 6. Jobs that cannot be completed before 5:00 a.m. on May 6 will, <a href="#">Read More</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="shared system-status">
                            <h2>Upcoming Events</h2>
                            <div className="postcard-left">
                                <div className="date-stacked">
                                    <div className="date-month"><span className="date-display-single">May</span></div>
                                    <div className="date-day"><span className="date-display-single">07</span></div>
                                </div>
                                <div className="event-title normal-link"><h3><a href="#">Sherlock Zoom office hours</a></h3></div>
                                <div className="event-location descriptor"></div>
                                <div className="event-date-long descriptor"><span className="date-display-single">3:00pm</span></div>
                            </div>
                            <div className="postcard-left">
                                <div className="date-stacked">
                                    <div className="date-month"><span className="date-display-single">May</span></div>
                                    <div className="date-day"><span className="date-display-single">07</span></div>
                                </div>
                                <div className="event-title normal-link"><h3><a href="#">Sherlock Zoom office hours</a></h3></div>
                                <div className="event-location descriptor"></div>
                                <div className="event-date-long descriptor"><span className="date-display-single">3:00pm</span></div>
                            </div>
                            <div className="postcard-left">
                                <div className="date-stacked">
                                    <div className="date-month"><span className="date-display-single">May</span></div>
                                    <div className="date-day"><span className="date-display-single">07</span></div>
                                </div>
                                <div className="event-title normal-link"><h3><a href="#">Sherlock Zoom office hours</a></h3></div>
                                <div className="event-location descriptor"></div>
                                <div className="event-date-long descriptor"><span className="date-display-single">3:00pm</span></div>
                            </div>
                            <div className="postcard-left">
                                <div className="date-stacked">
                                    <div className="date-month"><span className="date-display-single">May</span></div>
                                    <div className="date-day"><span className="date-display-single">07</span></div>
                                </div>
                                <div className="event-title normal-link"><h3><a href="#">Sherlock Zoom office hours</a></h3></div>
                                <div className="event-location descriptor"></div>
                                <div className="event-date-long descriptor"><span className="date-display-single">3:00pm</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ServicesBox;