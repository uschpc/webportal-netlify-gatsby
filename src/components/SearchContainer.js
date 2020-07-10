import React, { Component } from "react"
import postList from '../posts.json'
import * as JsSearch from "js-search"
import Markdown from "react-markdown"
import { Link } from "gatsby"
import Pagination from "./pagination.js"

class Search extends Component {
  state = {
    contentList: this.props.edges,
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
    dataToSearch.addIndex("excerpt") // sets the index attribute for the data
    dataToSearch.addIndex("html") // sets the index attribute for the data
    dataToSearch.addDocuments(contentList) // adds the data to be searched
    const searchQuery = window.location.search.split('?') ? window.location.search.split('?')[1].split('=')[1] : "";
    this.searchData(searchQuery, true);
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = (qry, flag) => {
    const { contentList } = this.state;
    let searchInput = flag ? qry.toLowerCase() : qry.target.value.toLowerCase();
    const updatedList = contentList.filter((item) => {
        return Object.keys(item).some(key => {
          return item[key].frontmatter.title.toString().toLowerCase().search(searchInput) !== -1 ||
          item[key].frontmatter.excerpt && item[key].frontmatter.excerpt.toString().toLowerCase().search(searchInput) !== -1 || 
          item[key].frontmatter.path && item[key].frontmatter.path.toString().toLowerCase().search(searchInput) !== -1 || 
          item[key].html.toString().toLowerCase().search(searchInput) !== -1
        });
    });
    this.setState({ searchQuery: searchInput, searchResults: updatedList })
  }
  render() {
    const { contentList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? contentList : searchResults
    return (
      <div>
        <div className="form-item">
          <label htmlFor="edit-search">Search</label>
          <img src="/images/search-icon-black@2x.png" />
          <input placeholder="Search..." data-drupal-selector="edit-search" type="text" id="edit-search" name="search" value={this.state.searchQuery} size="30" maxLength="128" className="form-text" onChange={e => this.searchData(e, false)} />
        </div>
        <div className="post-list">
            <h2><span>Search Results:</span> {this.state.searchQuery ? this.state.searchQuery : 'All'}</h2>
            <Pagination queryResults={queryResults} flag />
            {/* {queryResults.length ? queryResults.map((item, i) => {
                return (  
                  item.node.frontmatter.title && (
                    <div className="posts" key={i}>
                        <h3>{item.node.frontmatter.title}</h3>
                        <h4>{item.node.frontmatter.excerpt}</h4>
                        <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>Read More</Link>
                    </div>
                  )
                )
            }) :  <div className="posts">No Result Found</div>} */}
        </div>
      </div>
    )
  }
}
export default Search