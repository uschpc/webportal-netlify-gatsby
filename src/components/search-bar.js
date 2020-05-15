import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
    const [flag, searchTog] = useState(false);
 
    return (
    <div className="search-container">
        <div className="search">
            <div className="searchWrap">
                <div className="searchInner">
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