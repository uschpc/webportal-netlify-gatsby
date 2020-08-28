import React, {useEffect, useState} from 'react';
import ReactHtmlParser from 'react-html-parser';

import _ from 'lodash'
import axios from 'axios';

const SystemStatus = (props) => {
    const [ready, setReady] = useState(false)
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

    const listener = () => {
        if (window.scrollY >= 162) {
            setReady(true)
        }
    }
    const openModel =(e) => {
        e.preventDefault()
        props.openModel(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
          window.removeEventListener("scroll", listener);
        };
      }, []);

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
        <div className="shared system-status homepage">
            <div className="container-left">
                <div className="system-status-graph">
                    <h2 className="iframe-graph">System Status <a className="fa-external-link" href="#" onClick={(e) => openModel(e)}><i className="fa fa-external-link" style={{fontSize:"24px"}}></i></a></h2>
                    <div className="border">
                        {ready && <iframe className="homepage" src="https://d2zckdyoh6khem.cloudfront.net/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=300s&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>}
                        <div className="links">
                            <a className="view-more-graph" href="https://hpc-grafana.usc.edu/d/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s" target="_blank"><img src="/images/news-arrows.svg" alt="View compute system status" />View compute system status</a>
                            <a className="view-more-graph" href="https://hpcxdmod.usc.edu/" target="_blank"><img src="/images/news-arrows.svg" />View job status</a>
                            <a className="view-more-graph" href="https://hpc-grafana.usc.edu/d/dLO8iCiGk/file-system-usage-and-io?orgId=1&refresh=30s" target="_blank"><img src="/images/news-arrows.svg" alt="View file system status" />View file system status</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-right">
                <h2 className="discourse-title">Latest User Posts</h2>
                <img className="discourse-logo" src="/images/logo-discourse.png" alt="Latest User Posts from Discourse" />
                {result.length && result.map((item, i) => {
                    return (
                    i < 5 && (
                    <div className="discourse-latest-news-block" key={i}>
                        <div className="block">
                            <a href={`https://hpc-discourse.usc.edu/t/${item.slug}`} target="_blank">
                            <div className="right-side">{getFirstLetterOfUsers(item.last_poster_username)}</div>
                                <div className="left-side">
                                    <h3 className="title">{ReactHtmlParser(item.fancy_title)}</h3>
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

            <div className="hide">
                <h2>Upcoming Events</h2>
                <div className="postcard-left">
                    <div className="date-stacked">
                        <div className="date-month"><span className="date-display-single">May</span></div>
                        <div className="date-day"><span className="date-display-single">07</span></div>
                    </div>
                    <div className="event-title normal-link"><h3><a href="#">Sherlock Zoom office hours</a></h3></div>
                    <div className="event-location descriptor"></div>
                    <div className="event-date-long descriptor"><span className="date-display-single">3:00pm</span></div>
                </div>
                <div className="postcard-left">
                    <div className="date-stacked">
                        <div className="date-month"><span className="date-display-single">May</span></div>
                        <div className="date-day"><span className="date-display-single">07</span></div>
                    </div>
                    <div className="event-title normal-link"><h3><a href="#">Sherlock Zoom office hours</a></h3></div>
                    <div className="event-location descriptor"></div>
                    <div className="event-date-long descriptor"><span className="date-display-single">3:00pm</span></div>
                </div>
                <div className="postcard-left">
                    <div className="date-stacked">
                        <div className="date-month"><span className="date-display-single">May</span></div>
                        <div className="date-day"><span className="date-display-single">07</span></div>
                    </div>
                    <div className="event-title normal-link"><h3><a href="#">Sherlock Zoom office hours</a></h3></div>
                    <div className="event-location descriptor"></div>
                    <div className="event-date-long descriptor"><span className="date-display-single">3:00pm</span></div>
                </div>
                <div className="postcard-left">
                <div className="date-stacked">
                    <div className="date-month"><span className="date-display-single">May</span></div>
                    <div className="date-day"><span className="date-display-single">07</span></div>
                </div>
                <div className="event-title normal-link"><h3><a href="#">Sherlock Zoom office hours</a></h3></div>
                <div className="event-location descriptor"></div>
                <div className="event-date-long descriptor"><span className="date-display-single">3:00pm</span></div>
            </div>
            </div>
        </div>
    )
}

export default SystemStatus;
