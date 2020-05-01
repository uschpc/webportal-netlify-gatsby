import React from 'react';

const SearchBar = (props) => {
    /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
    // const searchData = e => {
    //     const { contentList } = this.state;
    //     const updatedList = contentList.filter((item) => {
    //         return Object.keys(item).some(key => item[key].toString().search(e.target.value) !== -1);
    //     });
    //     this.setState({ searchQuery: e.target.value, searchResults: updatedList })
    // }
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
            <label htmlFor="Search" style={{ paddingRight: "10px", color: '#fff' }}>
                Search
            </label>
            <input
                id="Search"
                onChange={(e) => props.searchData(e)}
                placeholder="Search....."
                style={{ margin: "0 auto", width: "200px" }}
            />
            </div>
      </form>
    )
}

export default SearchBar;