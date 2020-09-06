import React from "react";
import { Link } from "gatsby";
import Markdown from "react-markdown"

const CustomNews = (news) => {
    const generateFreindlyDate = (date) => {
        let userFreindlyDaye = new Date(date)
        return `${userFreindlyDaye.getMonth() + 1}/${userFreindlyDaye.getDate()}/${userFreindlyDaye.getUTCFullYear()}`
    }
    return (
        <div className="block news-child-pages">
            <img src={news.isSafari ? news.frontmatter.thumbnailForSafari : news.frontmatter.thumbnail}></img>
            <h3 className="excerpt">{news.frontmatter.excerpt}</h3>
            <h4 className="date">{generateFreindlyDate(news.frontmatter.date)}</h4>
            <h4 className="author">{`By ${news.frontmatter.author}`}</h4>
            <Markdown source={news.html} escapeHtml={false} />
        </div>
    )
}

export default CustomNews;
