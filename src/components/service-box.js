import React from 'react';
import featureBox from '../feature-boxes.json';

const ServiceBox = () => {
    return (
        <div id="x-section-5" className="x-section">
            <div className="marginless-columns" >
                {
                    featureBox.map(item => {
                        return <div className="shared">
                            <a href="#">
                                <img className="features-icon" src={item.image} />
                                <span className="features">{item.title}</span>
                                {/* <span className="copy-text">{item.content}</span> */}
                            </a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ServiceBox;