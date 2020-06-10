import React, { useEffect, useState } from "react";
import _ from 'lodash'

const Content = (props) => { 
    const [tags, loadTags] = useState([]);
    const generateTags = () => {
        return [...document.getElementsByTagName('h3')] || [];
    }

    const scrollToView = (e) => {
        e.preventDefault();
        const index = _.findIndex(tags, function(o) { 
            return o.innerHTML == e.target.getAttribute('value'); 
         });
         tags[index].scrollIntoView({behavior: "smooth", block: "center"});
    }

    useEffect(() => {
        loadTags(generateTags());
        
    }, [])
    return (
       <span className="content-container">
            {tags.length > 0 && (
            <span>
                <h3>Contents</h3>
                {tags.map((item, i) => {
                    return (
                        <li key={i} value={item.innerHTML} onClick={e => scrollToView(e)}>{item.innerHTML}</li>
                    )
                })}
            </span>
            )}   
       </span>
    )
}

export default Content;