import React, { useEffect, useState } from 'react';
import Markdown from "react-markdown"
import axios from 'axios';
import { Link } from 'gatsby';

const FeatureStories = (services) => {
    const [result, setResult] = useState([])

    useEffect(() => {
        axios.get('https://hpcaccount.usc.edu/static/discourse_public/latest.php')
            .then(function (response) {
                //handle success
                setResult(response.data.topic_list.topics)
            })
            .catch(function (response) {
                //handle error
                console.log('err', response);
            });
    }, [])

    return (
        <div className="shared press-release discourse">
            <h2 className="discourse-title">Latest User Posts</h2>
            {result.length && result.map((item, i) => {
                return (
                <div className="discourse-latest-news-block" key={i}>
                    <div className="block">
                        <a href={`https://hpc-discourse.usc.edu/t/${item.slug}`}>
                            <h3 className="title">{item.fancy_title}</h3>
                            </a>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default FeatureStories;
