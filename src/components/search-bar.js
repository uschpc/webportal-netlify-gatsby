import React from 'react';

const SearchBar = (props) => { 
    return (
        <div className="search-container">
            <div className="search">
                <div className="searchWrap">
                    <div className="searchInner">
                        <div className="form">
                            <form action="/search-results">
                                <input type="search" name="q" className="search" placeholder="ENTER SEARCH TERMS" />
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