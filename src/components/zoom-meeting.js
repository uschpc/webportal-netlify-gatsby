import React, { useEffect, useState } from 'react';
import axios from 'axios' 
import Markdown from "react-markdown"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import moment from 'moment'


const ZoomMeeting = ({html}) => {
    const [meetingResults, fetchMeetings] = useState(null)

    const formatDate = (time) => {
        let [month, date, year]    = ( new Date(time) ).toLocaleDateString().split("/")
        return `${month}/${date}/${year}`
    }

    const formatTime = (time) => {
        time = new Date(time)
        return time.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute:'2-digit' })
         
    }

    const formatDuration = (duration) => {
        let minutes = duration % 60;
        let hours = (duration - minutes) / 60;

        return `${hours}:${minutes}`
         
    }

    const getFreindlyDate = (num) => {
        let hours = Math.floor(num / 60);  
        let minutes = num % 60;
        if (hours >= 1 ) {
            return `${hours}:${minutes} Hr` 
        }
        return `${hours}:${minutes} Mi`
    }

    useEffect(() => {
        (async () => {
            let resultArray = []
            let promissesArray = []
            let promiss = null
            let result = await axios.get(`https://hpcaccount.usc.edu/static/zoom/zoom_listmeetings.php`)
            let meetings = result.data.meetings 
            meetings.forEach(({id, start_time}, index) => {
                let today = moment().format()
                let notPastDueEvents = moment(start_time).isAfter(today)
                if (notPastDueEvents) {
                    promiss = axios.get(`https://hpcaccount.usc.edu/static/zoom/zoom_getmeeting.php?id=${id}`)
                    promissesArray.push(promiss)   
                }
            })
            if (promissesArray.length) {
                let meetingResults = await Promise.all(promissesArray)
                meetingResults.forEach(meeting => {
                    resultArray.push(meeting.data)
                })
              }
            fetchMeetings(resultArray)
        })()
    }, [])
    useEffect(() => {
        let allLinks = document.querySelectorAll(".middle-column a");
            for ( let i = 0; i < allLinks.length; i++ ) {
            allLinks[i].target = "_blank"
            allLinks[i].onclick = "return false"
            allLinks[i].addEventListener('click', (e) => {
                e.preventDefault()
                window.open(allLinks[i].href)
            })
        }
    }, meetingResults)
    return (
        meetingResults ? (
            <>
            <Markdown source={html} escapeHtml={false} />
            <h2 className="meetings-heading">USC Advanced Research Computing - Upcoming Events</h2>
            {meetingResults.map((meeting, index) => {
                return (
                    <div className={`meetings ${(meetingResults.length - 1) === index ? 'last': ''}`} key={index}>
                        <h3 className="topic">{meeting.topic}</h3>
                        <div className="agenda">{meeting.agenda}</div>
                        <div className="meeting-info">
                            <div className="left-meeting-column">
                                <div className="date"><span>Date:</span> {
                                meeting.occurrences ? 
                                meeting.occurrences.map(oc => {
                                    return <li>{formatDate(oc.start_time)}</li>
                                        }
                                        ) : 
                                        formatDate(meeting.start_time) }
                                    </div>
                                <div className="time"><span>Time:</span> {formatTime(meeting.start_time ? meeting.start_time : meeting.occurrences[0].start_time)}</div>
                            </div>
                            <div className="middile-meeting-column">
                                <div className="duration"><span>Duration:</span> {formatDuration(meeting.duration ? meeting.duration : meeting.occurrences[0].duration)} Hr</div>
                                <div className="timezone"><span>Timezone:</span> {meeting.timezone}</div>
                            </div>
                        </div>
                        <div className="right-column-btn">
                            <a href={meeting.join_url} target="_blank">Register</a>
                        </div>
                    </div>
                )
            })}
            </>
        ) :  (
            <div className="meeting-loader">
                <Loader
                    type="TailSpin"
                    color="#990000"
                    height={100}
                    width={100}
                    margin='0 auto'
                    textAlign="center"
                />
            </div>
        )
    )
}

export default ZoomMeeting;
