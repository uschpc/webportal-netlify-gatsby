import React, { useEffect, useState } from "react";
import _ from 'lodash'

const Content = (props) => {
    const [tags, loadTags] = useState([]);
    let element = props.flag ? 'h2' : 'h3'
    const generateTags = () => {
        return [...document.getElementsByTagName(element)] || [];
    }

    const scrollToView = (e) => {
        e.preventDefault();
        document.querySelector('.page-body').classList.add("scroll")
        document.getElementById('___gatsby').classList.add("enable")
        const index = _.findIndex(tags, function(o) {
            return o.innerHTML == e.target.getAttribute('value');
         });
         document.querySelector('.page-body').scrollTo({
            top: tags[index].offsetTop - 200
       });
        // tags[index].scrollIntoView({block: "start"})
    }

    useEffect(() => {
        loadTags(generateTags());
    }, [])
    return (
        <span className="content-wrapper">
        {tags.length > 0 && (
        <span className="content-container">
            <span>
                <h3>Contents</h3>
                {tags.map((item, i) => {
                    return (
                        <li key={i} value={item.innerHTML} onClick={e => scrollToView(e)}>{item.innerHTML}</li>
                    )
                })}
            </span>

        </span>
       )}
       </span>
    )
}

export default Content;
