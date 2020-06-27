import React from 'react';
import Markdown from "react-markdown"
import { Link } from 'gatsby';
import latestNews from '../latest-news.json';

const LatestNews = (news) => {
    return (
        !news.flag ? (
            <div className="shared news">
                <h2>Latest News</h2>
                {news.edges.map((item, i) => {
                    return (
                        i < 2 && (
                            <div className="press-news-block" key={i}>
                                <div className="block">
                                    <h3 className="title">{item.node.frontmatter.title}</h3>
                                    <img src={item.node.frontmatter.thumbnail}></img>
                                    <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                                    <Link className="copy-text" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>Read More</Link>
                                </div>
                            </div>
                        )
                    )
                })}
            </div>
        ) : (
            <div className="shared news">
                {news.edges.map((item, i) => {
                    return (
                        <Link className="press-news-block" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`} key={i}>
                            <div className="block">
                                <h3 className="title">{item.node.frontmatter.title}</h3>
                                <img src={item.node.frontmatter.thumbnail}></img>
                                <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
        
    )
}

export default LatestNews;