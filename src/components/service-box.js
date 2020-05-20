import React from 'react';
import featureBox from '../feature-boxes.json';
import { Link } from 'gatsby';

const ServiceBox = (services) => {
    return (
        <div id="x-section-5" className="x-section">
            <div className="marginless-columns" >
                {
                    services.edges.map(item => {
                        return <div className="shared">
                            <Link to={item.node.frontmatter.path}>
                                <img className="features-icon" src={item.node.frontmatter.thumbnail} />
                                <span className="features">{item.node.frontmatter.title}</span>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ServiceBox;