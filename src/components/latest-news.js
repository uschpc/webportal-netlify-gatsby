import React from 'react';
import latestNews from '../latest-news.json';

const LatestNews = () => {
    return (
        <div className="shared news">
            <h2>Latest News</h2>
            {latestNews.map(item => {
                return (
                <div className="press-news-block">
                    <div className="block">
                        <h3 className="title">{item.title}</h3>
                        <img src={item.image}></img>
                        <h4 className="copy-text">{item.content} <a href="#">Read More</a></h4>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default LatestNews;