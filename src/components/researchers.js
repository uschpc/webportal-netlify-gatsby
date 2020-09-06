import React from 'react';
import Markdown from "react-markdown"
import { Link } from 'gatsby';

const Researcher = (news) => {
    return (
        !news.flag ? (
            <div className="shared researcher">
                <h2>Latest News</h2>
                {news.edges.map((item, i) => {
                    return (
                        i < 2 && (
                            <div className="press-researcher-block" key={i}>
                                <div className="block">
                                <Link to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                                    <h3 className="title">{item.node.frontmatter.title}</h3>
                                    <img src={item.node.frontmatter.thumbnail} alt={item.node.frontmatter.title}></img>
                                    <div className="feature-content">
                                        <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                                    </div>
                                </Link>
                                </div>
                            </div>
                        )
                    )
                })}
            </div>
        ) : (
            <div className="shared researcher">
                {news.edges.map((item, i) => {
                    return (
                        i < 6 && (
                            <Link className="press-researcher-block" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`} key={i}>
                                <div className="block">
                                    <h3 className="title">{item.node.frontmatter.title}</h3>
                                    <img src={item.node.frontmatter.thumbnail} alt={item.node.frontmatter.title}></img>
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

export default Researcher;