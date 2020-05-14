import React from 'react';
import featureStories from '../feature-stories.json';

const FeatureStories = () => {
    return (
        <div className="shared press-release">
            <h2>Featured Story</h2>
            {featureStories.map(item => {
                return (
                <div className="press-news-block">
                    <div className="block">
                        <h3 className="title">{item.title}</h3>
                        <img src={item.image}></img>
                        <h4 className="copy-text">{item.content}, <a href="#">Read More</a></h4>
                    </div>
                </div>
                )
                
            })}
        </div>
    )
}

export default FeatureStories;