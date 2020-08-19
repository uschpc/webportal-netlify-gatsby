import React, { Component } from "react"
import postList from '../posts.json'
import * as JsSearch from "js-search"
import Markdown from "react-markdown"
import { Link } from "gatsby"
import Pagination from "./pagination.js"

class Search extends Component {
  state = {
    contentList: this.props.edges,
    search: null,
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
    searchArray: []
  }

  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    try {
        this.rebuildIndex();
      }
      catch(err) {
        this.setState({ isError: true });
        console.log("====================================");
        console.log(`Something bad happened while fetching the data\n${err}`);
        console.log("====================================");
      }
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { contentList } = this.state;
    let searchArray = []
    contentList.map(obj => {
      searchArray.push({
        ...obj.node.frontmatter,
        html: obj.node.html
      })
    })

    const dataToSearch = new JsSearch.Search("title");
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex();
    dataToSearch.addIndex(["title"]) // sets the index attribute for the data
    // dataToSearch.addIndex("path") // sets the index attribute for the data
    // dataToSearch.addIndex("html") // sets the index attribute for the data
    dataToSearch.addDocuments(searchArray) // adds the data to be searched
    // const searchQuery = window.location.search.split('?') ? window.location.search.split('?')[1].split('=')[1] : "";
    // this.searchData(searchQuery, true);
    this.setState({ search: dataToSearch, isLoading: false, searchArray })

  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = (qry) => {
    const { search } = this.state
    let queryResult = []
    queryResult = search.search(qry.target.value) 
    if (!queryResult.length) {
      search.addIndex("html")
      queryResult = search.search(qry.target.value) 
    }
    this.setState({ searchQuery: qry.target.value, searchResults: queryResult })
  }
  render() {
    const { searchArray, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? searchArray : searchResults
    return (
      <div>
        <div className="form-item">
          <label htmlFor="edit-search">Search</label>
          <img src="/images/search-icon-black@2x.png" />
          <input placeholder="Search..." data-drupal-selector="edit-search" type="text" id="edit-search" name="search" value={this.state.searchQuery} size="30" maxLength="128" className="form-text" onChange={e => this.searchData(e)} />
        </div>
        <div className="post-list">
            <h2><span>Search Results:</span> {this.state.searchQuery ? this.state.searchQuery : 'All'}</h2>
            <Pagination queryResults={queryResults} flag />
        </div>
      </div>
    )
  }
}
export default Search