import React, { useEffect } from 'react';
import Markdown from "react-markdown"
import axios from 'axios';
import { Link } from 'gatsby';

const FeatureStories = (services) => {

    useEffect(() => {
        axios.get('https://hpc-discourse.usc.edu/latest.json',
        {headers: {
            "Api-Key" : "d8786b49f37517d04f621ba23f0de5b464de03a4bab2fb2c4011b4350ca0da72",
            "Api-Username": "system",
          }
        })
            .then(function (response) {
                //handle success
                console.log('success', response);
            })
            .catch(function (response) {
                //handle error
                console.log('err', response);
            });
    })

    return (
        <div className="shared press-release">
            <h2>Featured Story</h2>
            {services.edges.map((item, i) => {
                return (
                <div className="press-news-block" key={i}>
                    <div className="block">
                    <Link to={item.node.frontmatter.path}>
                        <h3 className="title">{item.node.frontmatter.title}</h3>
                        <img src={item.node.frontmatter.thumbnail}></img>
                        <div className="feature-content">
                            <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                            {/* <Link className="copy-text" to={item.node.frontmatter.path}>Read More</Link> */}
                        </div>
                        </Link>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default FeatureStories;