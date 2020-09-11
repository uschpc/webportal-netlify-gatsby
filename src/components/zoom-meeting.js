import React, { useEffect, useState } from 'react';
import axios from 'axios' 
import Markdown from "react-markdown"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


const ZoomMeeting = ({html}) => {
    const [meetings, fetchMeetings] = useState(null)

    const formatDate = (time) => {
        let [month, date, year]    = ( new Date(time) ).toLocaleDateString().split("/")
        return `${month}/${date}/${year}`
    }

    const formatTime = (time) => {
        time = new Date(time)
        return time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
         
    }

    useEffect(() => {
        axios.get(`https://hpcaccount.usc.edu/static/zoom/zoom_listmeetings.php`).then( res => fetchMeetings(res.data.meetings) )
    }, [])
    return (
        meetings ? (
            <>
            <Markdown source={html} escapeHtml={false} />
            <h2 className="meetings-heading">USC Advanced Research Computing - Upcoming Events</h2>
            {meetings.map((meeting, index) => {
                return (
                    <div className={`meetings ${(meetings.length - 1) === index ? 'last': ''}`} key={index}>
                        <h3 className="topic">{meeting.topic}</h3>
                        <div className="agenda">{meeting.agenda}</div>
                        <div className="meeting-info">
                            <div className="left-meeting-column">
                                <div className="date"><span>Date:</span> {formatDate(meeting.start_time)}</div>
                                <div className="time"><span>Time:</span> {formatTime(meeting.start_time)}</div>
                            </div>
                            <div className="middile-meeting-column">
                                <div className="duration"><span>Duration:</span> {meeting.duration} minutes</div>
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
