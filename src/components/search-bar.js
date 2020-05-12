import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
    const [flag, searchTog] = useState(false);
 
    const searchToggle = (searchFlag) => {
        if (searchFlag) {
            searchTog(searchFlag);
        }
        searchTog(!flag);
    }
    return (
    <div className="search-container">
        <a href="#" className={`searchToggle ${flag ? 'hide' : 'show'} `} onClick={() => searchToggle()}></a>
        <div className={ `search ${flag ? 'show' : 'hide'} `}>
            <div className="searchWrap">
                <div className="searchInner">
                    <a href="#" className="closeBtn" onClick={() => searchToggle(!flag)}>
                        <span className="top"></span>
                        <span className="bottom"></span>
                    </a>
                    <div className="form">
                        <form action="/search.cfm" method="get" name="headerSearch" id="headerSearch">
                            <input type="search" className="search" placeholder="ENTER SEARCH TERMS" />
                            <input type="submit" className="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SearchBar;