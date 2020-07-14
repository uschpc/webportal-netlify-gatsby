import React, { useEffect, useState } from "react";
import Markdown from "react-markdown"
import Tags from "../helper/FAQ"
import _ from 'lodash'

const FAQ = (props) => { 
    const [tags, loadTags] = useState([]);
    const [h2tags, loadH2Tags] = useState([]);

    let h2element = 'h2';
    let h3element = 'h3';

    const generateH2Tags = () => {
        return [...document.getElementsByTagName(h2element)] || [];
    }
    const generateH3Tags = () => {
        return [...document.getElementsByTagName(h3element)] || [];
    }
    const generateSubTags = (title) => {
        return Tags[title] || [];
    }

    const generateSubTitle = (title) => {
        let h3Tags = []
        h3Tags = Object.entries(generateSubTags(title)).map((item, i) => {
            return (
                `<li key="${i}" value="${item[1]}" class="${`${title}`}">${item[1]}</li>`
            )
        })
        return h3Tags.join('');
    }

    const scrollToSubElementView = async (e) => {
        e.preventDefault();
        let headerOffset = 45;
        let h3Tags = generateH3Tags();
        
        let index = _.findIndex(h3Tags, function(o) { 
            return o.innerHTML == e.target.getAttribute('value'); 
         });        
        h3Tags[index].scrollIntoView({block: "start"})
    }

    const addEvents = (title) => {
        var elem = document.getElementsByClassName(title);
        for(var i=0; i < elem.length; i++){
           elem[i].addEventListener("click", (e) => scrollToSubElementView(e));
        }
     }

    const scrollToView = async (e) => {
        e.preventDefault();
        var headerOffset = 0;
        
        const index = _.findIndex(h2tags, function(o) { 
            return o.innerHTML == e.target.getAttribute('value'); 
         });
        h2tags[index].scrollIntoView({block: "start"})
    }

    const loadSubTitles = () => {
         _.findIndex(h2tags, function(o, index) { 
            let title = o.innerHTML;
            !h2tags[index].classList.contains("sub-list-added") && h2tags[index].insertAdjacentHTML('afterend', `<span class="sup-items">${generateSubTitle(title)}</span>`)
            addEvents(title)
            h2tags[index].classList.add('sub-list-added')
        });
    }

    useEffect(() => {
        loadH2Tags(generateH2Tags())
    }, [])

    useEffect(() => {
        loadSubTitles()
    }, [h2tags])

    return (
        <span className="content-wrapper">
        {h2tags.length > 0 && (
        <span className="content-container">
            <span className="faq">
                <h3>Contents</h3>
                {h2tags.map((item, i) => {
                    return (
                        <li key={i} value={item.innerHTML} onClick={e => scrollToView(e)}>{item.innerHTML}</li>
                    )
                })}
            </span>
            
        </span>
       )}   
        <Markdown source={props.html} escapeHtml={false} />
       </span>
    )
}

export default FAQ;