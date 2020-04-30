import React, { Component } from "react"
import postList from '../posts.json'
import * as JsSearch from "js-search"
import Markdown from "react-markdown"

class Search extends Component {
  state = {
    contentList: postList,
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
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
    const dataToSearch = new JsSearch.Search("isbn");
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
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
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn");
    dataToSearch.addIndex("title") // sets the index attribute for the data
    dataToSearch.addIndex("author") // sets the index attribute for the data
    dataToSearch.addIndex("content") // sets the index attribute for the data
    dataToSearch.addDocuments(contentList) // adds the data to be searched
    // this.setState({ search: dataToSearch, isLoading: false });
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { contentList } = this.state;
    const updatedList = contentList.filter((item) => {
        return Object.keys(item).some(key => item[key].toString().search(e.target.value) !== -1);
    });
    this.setState({ searchQuery: e.target.value, searchResults: updatedList })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { contentList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? contentList : searchResults
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="Search" style={{ paddingRight: "10px" }}>
                Enter your search here
              </label>
              <input
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Enter your search here"
                style={{ margin: "0 auto", width: "400px" }}
              />
            </div>
          </form>
          <div className="post-list">
              <h2>Post lists</h2>
              {queryResults.map((item, i) => {
                  return (  
                      <div className="posts" key={i}>
                          <h3>{item.title}</h3>
                          <Markdown source={item.content} escapeHtml={false} />
                      </div>
                  )
              })}
          </div>
      </div>
    )
  }
}
export default Search