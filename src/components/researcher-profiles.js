import React from "react";
import { Link } from "gatsby";
import Markdown from "react-markdown"

const ResearcherProfiles = (researcher) => {
    const generateFreindlyDate = (date) => {
        let userFreindlyDaye = new Date(date)
        return `${userFreindlyDaye.getMonth() + 1}/${userFreindlyDaye.getDate()}/${userFreindlyDaye.getUTCFullYear()}`
    }
    return (
        <div className="block researcher-child-pages">
            <img src={researcher.isSafari ? researcher.frontmatter.thumbnailForSafari : researcher.frontmatter.thumbnail} alt={researcher.frontmatter.author}></img>
            <h3 className="excerpt">{researcher.frontmatter.excerpt}</h3>
            <h4 className="date">{generateFreindlyDate(researcher.frontmatter.date)}</h4>
            <h4 className="author">{`By ${researcher.frontmatter.author}`}</h4>
            <Markdown source={researcher.html} escapeHtml={false} />
        </div>
    )
}

export default ResearcherProfiles;
