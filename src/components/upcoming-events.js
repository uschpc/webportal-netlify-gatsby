import React from 'react';

const UpcomingEvents = () => {
    return (
        <div className="shared system-status">
            <iframe src="https://hpc-grafana.usc.edu/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s&from=1593106620736&to=1593711420736&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>
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
    )
}

export default UpcomingEvents;