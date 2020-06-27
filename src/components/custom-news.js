import React from "react";
import { Link } from "gatsby";
import Markdown from "react-markdown"

const CustomNews = (news) => { 
    console.log('news', news)
    return (
        <div className="block news-child-pages">
            <h4 className="date">{news.frontmatter.date}</h4>
            <h3 className="excerpt">{news.frontmatter.excerpt}</h3>
            <h4 className="author">{news.frontmatter.author}</h4>
            <img src={news.frontmatter.thumbnail}></img>
            <Markdown source={news.html} escapeHtml={false} />
        </div>
    )
}

export default CustomNews;