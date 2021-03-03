import React from "react";
import { Link } from "gatsby";
import Markdown from "react-markdown"

const OnDemandVideo = (video) => {
    const generateFreindlyDate = (date) => {
        let userFreindlyDaye = new Date(date)
        return `${userFreindlyDaye.getMonth() + 1}/${userFreindlyDaye.getDate()}/${userFreindlyDaye.getUTCFullYear()}`
    }
    return (
        <div className="block video-child-pages">
            {video.frontmatter.featuredVideo && (
                <iframe width="255" height="200" src={video.frontmatter.featuredVideo}></iframe>
            )}
            <h3 className="excerpt">{video.frontmatter.excerpt}</h3>
            <h4 className="date">{generateFreindlyDate(video.frontmatter.date)}</h4>
            <h4 className="author">{`By ${video.frontmatter.author}`}</h4>
            <Markdown source={video.html} escapeHtml={false} />
        </div>
    )
}

export default OnDemandVideo;
