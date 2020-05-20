import React from 'react';
import Markdown from "react-markdown"
import featureStories from '../feature-stories.json';
import { Link } from 'gatsby';

const FeatureStories = (services) => {
    return (
        <div className="shared press-release">
            <h2>Featured Story</h2>
            {services.edges.map(item => {
                return (
                <div className="press-news-block">
                    <div className="block">
                        <h3 className="title">{item.node.frontmatter.title}</h3>
                        <img src={item.node.frontmatter.thumbnail}></img>
                        <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                        <Link className="copy-text" to={item.node.frontmatter.path}>Read More</Link>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default FeatureStories;