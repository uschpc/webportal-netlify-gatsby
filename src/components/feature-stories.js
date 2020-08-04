import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import axios from 'axios';
import Markdown from "react-markdown"


const FeatureStories = (props) => {
    const [result, setResult] = useState([])
    const [categories, setCategory] = useState([])

    const getFirstLetterOfUsers = (user) => {
        return user.split('')[0].toUpperCase()
    }

    const findCategories = (categoryId) => {
        let result = _.filter(categories, function(cat) { 
            if (cat.subcategory_ids) {
                if (cat.subcategory_ids.indexOf(categoryId) > -1) {
                    return cat.name
                }
            } 
         });
         return result[0] ? result[0].name : null
    }

    useEffect(() => {
        axios.get('https://hpcaccount.usc.edu/static/discourse_public/categories.php')
            .then(function (response) {
                //handle success
                setCategory(response.data.category_list.categories)
            })
            .catch(function (response) {
                //handle error
                console.log('err', response);
            });

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
            <h2 className="margin Announcements">Announcements</h2>
            <div className="Announcements-box">
                <Markdown className="description" source={props.announcements.html} escapeHtml={false} />
                <div className="by">{`By: ${props.announcements.frontmatter.author}`}</div>
                <div className="date">{`By: ${props.announcements.frontmatter.date}`}</div>
            </div>
             {/* <div className="recent-news">
                <h2>Recent Tweets</h2>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="usccarc"
                    options={{height: 400, margin: '20px 0 20px 0'}}
                />
            </div> */}
            <h2 className="discourse-title">Latest User Posts</h2>
            {result.length && result.map((item, i) => {
                return (
                i < 6 && (
                <div className="discourse-latest-news-block" key={i}>
                    <div className="block">
                        <a href={`https://hpc-discourse.usc.edu/t/${item.slug}`} target="_blank">
                        <div className="right-side">{getFirstLetterOfUsers(item.last_poster_username)}</div>
                            <div className="left-side">
                                <h3 className="title">{item.fancy_title}</h3>
                                <div className="second-row">
                                    <div className="icon"></div>
                                    <div className="category">{findCategories(item.category_id) ? findCategories(item.category_id) : 'Announcements'}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                    )
                )
            })}
        </div>
    )
}

export default FeatureStories;
