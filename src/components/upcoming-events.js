import React, {useEffect, useState} from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const UpcomingEvents = (props) => {
    const [ready, setReady] = useState(false)

    const listener = () => {
        if (window.scrollY >= 162) {
            setReady(true)
        }
    }
    const openModel =(e) => {
        e.preventDefault()
        props.openModel(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
          window.removeEventListener("scroll", listener);
        };
      }, []);

    return (
        <div className="shared system-status homepage">
            {/* <h2 className="margin Announcements">Announcements</h2>
            <div className="Announcements-box">
                <Markdown className="description" source={props.announcements.html} escapeHtml={false} />
                <div className="by">{`By: ${props.announcements.frontmatter.author}`}</div>
                <div className="date">{`By: ${props.announcements.frontmatter.date}`}</div>
            </div> */}
             <h2 className="iframe-graph">System Status <a href="#" onClick={(e) => openModel(e)}><i className="fa fa-external-link" style={{fontSize:"24px"}}></i></a></h2>
            {ready && <iframe className="homepage" src="https://d2zckdyoh6khem.cloudfront.net/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=300s&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>}
            <a className="view-more-graph" href="https://hpc-grafana.usc.edu/d/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s" target="_blank">View more details on system status</a>
            <a className="view-more-graph" href="https://hpcxdmod.usc.edu/" target="_blank">View more details on job status</a>
            <div className="recent-news">
                <h2>Recent Tweets</h2>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="usccarc"
                    options={{height: 400, margin: '20px 0 20px 0'}}
                />
            </div>
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
