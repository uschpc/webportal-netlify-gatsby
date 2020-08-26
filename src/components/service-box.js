import React from 'react';
import { Link } from 'gatsby';

const ServiceBox = (services) => {
    return (
        <div id="x-section-5" className="x-section">
            <div className="marginless-columns" >
                {services.edges.map((item, i) => {
                        return (
                        !item.node.frontmatter.redirectToPage ? (
                            <div className="shared" key={i}>
                                <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.path}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                                    <img className="features-icon" src={item.node.frontmatter.thumbnail} alt={item.node.frontmatter.title} />
                                    <span className="features">{item.node.frontmatter.title}</span>
                                </Link>
                            </div>
                            ) : (
                            <div className="shared" key={i}>
                                <Link to={item.node.frontmatter.redirectToPage}>
                                    <img className="features-icon" src={item.node.frontmatter.thumbnail} alt={item.node.frontmatter.title} />
                                    <span className="features">{item.node.frontmatter.title}</span>
                                </Link>
                            </div>
                            )
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ServiceBox;