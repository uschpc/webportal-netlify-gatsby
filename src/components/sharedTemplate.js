import React from 'react';
import featureBox from '../feature-boxes.json';
import { Link } from 'gatsby';
import Markdown from "react-markdown"
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import MenuRoute from './menu-route.js';

const SharedTemplate = (items) => {
    return (
        <div className={items.className ? items.className : "user-support"}>
            <h1>{items.title}</h1>
            {/* <MenuRoute {...items} /> */}
            <div className="container">
                <div className="left-col">
                    {items.cat !== 'userSupport' && <Markdown source={items.content.html} escapeHtml={false} />}
                    { items.cat !== 'sharedTemplate' ? (
                    items.md.edges.map ((item, i) => {
                        
                            return (
                                !item.node.frontmatter.externalPath ? (
                                    item.node.frontmatter.redirectToPage ? (
                                        <Link to={item.node.frontmatter.redirectToPage} key={i}>
                                            <div className="user-support-box">
                                                <img src={item.node.frontmatter.thumbnail} />
                                                <p className="title">{item.node.frontmatter.title}</p>
                                                <p className="description">{item.node.frontmatter.excerpt}</p>
                                            </div>
                                        </Link>
                                    ) : (
                                        <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path} key={i}>
                                            <div className="user-support-box">
                                                <img src={item.node.frontmatter.thumbnail} />
                                                <p className="title">{item.node.frontmatter.title}</p>
                                                <p className="description">{item.node.frontmatter.excerpt}</p>
                                            </div>
                                        </Link>
                                    )
                                ) : (
                                    <a href={item.node.frontmatter.externalPath} key={i} target="_blank">
                                        <div className="user-support-box">
                                            <img src={item.node.frontmatter.thumbnail} />
                                            <p className="title">{item.node.frontmatter.title}</p>
                                            <p className="description">{item.node.frontmatter.excerpt}</p>
                                        </div>
                                    </a>
                                )
                            )
                    })) : (
                    items.md.edges.map ((item, i) => {
                        return (
                            <span key={i}>
                                <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                                    <div className="user-support-box">
                                        <p className="title">{item.node.frontmatter.title}</p>
                                    </div>
                                </Link>
                                <p className="description">{item.node.frontmatter.excerpt}</p>
                            </span>
                        )
                    })
                    )
                    }
                    {items.cat === 'userSupport' && <Markdown className="user-support-content" source={items.content.edges[0].node.html} escapeHtml={false} />}
                </div>
                {items.cat === 'userSupport' ? (
                    <div className="right-col">
                        <div className="system-status">
                            <h3>System Status <a href="https://hpc-grafana.usc.edu/" target="_blank"><i class="fa fa-external-link" style={{fontSize:"24px"}}></i></a></h3>
                            <iframe className="user-support" src="https://d2zckdyoh6khem.cloudfront.net/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=300s&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>
                            <a className="view-more-graph" href="http://hpcaccount.usc.edu:8080/" target="_blank">View more graph</a>
                        </div>
                        <div className="recent-news">
                            <h3>Recent Tweets</h3>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="usccarc"
                                options={{height: 400}}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="right-col">
                        <div className="system-status">
                            <h3>Related Links</h3>
                            <h5>Some links</h5>
                            <h5>Some links</h5>
                            <h5>Some links</h5>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SharedTemplate;
