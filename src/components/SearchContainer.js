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

  componentWillReceiveProps(nextProps) {
    for (const index in nextProps) {
      if (nextProps[index] !== this.props[index]) {
        console.log(index, this.props[index], '-->', nextProps[index]);
        this.searchData(nextProps[index]);
      }
    }
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
  searchData = qry => {
    const { contentList } = this.state;
    const updatedList = contentList.filter((item) => {
        return Object.keys(item).some(key => item[key].toString().search(qry) !== -1);
    });
    this.setState({ searchQuery: qry, searchResults: updatedList })
  }
  render() {
    const { contentList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? contentList : searchResults
    return (
      <div>
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