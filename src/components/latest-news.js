import React from 'react';
import Markdown from "react-markdown"
import { Link } from 'gatsby';
import latestNews from '../latest-news.json';

const LatestNews = (news) => {
    console.log(news)
    return (
        !news.flag ? (
            <div className="shared news">
                <h2>CARC News</h2>
                {news.edges.map((item, i) => {
                    return (
                        i < 2 && (
                            <div className="press-news-block" key={i}>
                                <div className="block">
                                <Link to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                                    <h3 className="title">{item.node.frontmatter.title}</h3>
                                    <div className="image-wrapper">
                                       {/* <img src={item.node.frontmatter.thumbnail} alt={item.node.frontmatter.title}></img> */}
                                       <img src={item.node.frontmatter.featuredImage.childImageSharp.fluid.src} alt={item.node.frontmatter.title}></img>
                                    </div>
                                    <div className="feature-content">
                                        <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                                        {/* <Link className="copy-text" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>Read More</Link> */}
                                    </div>
                                </Link>
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
                        i < 6 && (
                            <Link className="press-news-block" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`} key={i}>
                                <div className="block">
                                    <h3 className="title">{item.node.frontmatter.title}</h3>
                                    {/* <img src={item.node.frontmatter.thumbnail} ></img> */}
                                    <img src={item.node.frontmatter.featuredImage.childImageSharp.fluid.src} ></img>
                                    <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                                </div>
                            </Link>
                        )
                    )
                })}
            </div>
        )

    )
}

export default LatestNews;
