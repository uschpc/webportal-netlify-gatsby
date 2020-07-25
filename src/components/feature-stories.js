import React, { useEffect } from 'react';
import Markdown from "react-markdown"
import axios from 'axios';
import { Link } from 'gatsby';

const FeatureStories = (services) => {
    // testing discourse
     const loadDataOnlyOnce = () => {
        window.DiscourseEmbed = { discourseUrl: 'https://hpc-discourse.usc.edu/',
                        discourseEmbedUrl: 'https://hpc-discourse.usc.edu/latest' };
        var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
        d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
    }

    useEffect(() => {
        loadDataOnlyOnce();
    })

    return (
        <div className="shared press-release">
            <h2>Featured Story</h2>
            <div id='discourse-comments'></div>
            {/* {services.edges.map((item, i) => {
                return (
                <div className="press-news-block" key={i}>
                    <div className="block">
                    <Link to={item.node.frontmatter.path}>
                        <h3 className="title">{item.node.frontmatter.title}</h3>
                        <img src={item.node.frontmatter.thumbnail}></img>
                        <div className="feature-content">
                            <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                            {/* <Link className="copy-text" to={item.node.frontmatter.path}>Read More</Link> 
                        </div>
                        </Link>
                    </div>
                </div>
                )
            })} */}
        </div>
    )
}

export default FeatureStories;