import React, { useEffect, useState } from 'react';
import Markdown from "react-markdown"
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Link } from 'gatsby';


const Announcement = (props) => {
    return (
        <div className="shared press-release discourse">
            <h2 className="margin Announcements">Announcements</h2>
            <div className="Announcements-box">
                <img src="/images/Comment.png" />
                {/* <div className="by">{`By: ${props.announcements.frontmatter.author}`}</div> */}
                <div className="date">{props.announcements.frontmatter.date}</div>
                <Markdown className="description" source={props.announcements.html} escapeHtml={false} />
            </div>
            <div className="links">
                <Link className="link" to="/news-and-events/news-and-announcements"><img src="/images/news-arrows.svg" />View news and announcements</Link>
                <Link className="link" to="/news-and-events/events"><img src="/images/news-arrows.svg" />View upcoming events</Link>
            </div>
             <div className="recent-news">
                <h2>Recent Tweets</h2>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="usccarc"
                    options={{height: 400, margin: '20px 0 20px 0'}}
                />
            </div>
        </div>
    )
}

export default Announcement;
