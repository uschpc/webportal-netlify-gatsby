import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const UpcomingEvents = () => {
    return (
        <div className="shared system-status homepage">
             <h2 className="iframe-graph">System Status <a href="https://hpc-grafana.usc.edu/" target="_blank"><i class="fa fa-external-link" style={{fontSize:"24px"}}></i></a></h2>
            <iframe className="homepage" src="https://d2zckdyoh6khem.cloudfront.net/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=300s&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>
            <a className="view-more-graph" href="http://hpcxdmod.usc.edu/" target="_blank">View more graph</a>
            <h2 className="margin">Recent Tweets</h2>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="usccarc"
                    options={{height: 400}}
                />
            <div className="hide">
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
    )
}

export default UpcomingEvents;
