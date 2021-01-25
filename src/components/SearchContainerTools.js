import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
const resources = require('../resources.json')
class SearchProject extends Component {
  state = {
    resources: [],
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
    Axios.get("https://bvaughn.github.io/js-search/books.json")
      .then(result => {
        const resourcesData = resources
        this.setState({ resources: resourcesData.resources })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }
  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { resources } = this.state
    const dataToSearch = new JsSearch.Search("isbn")
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")
    dataToSearch.addIndex("tool") // sets the index attribute for the data
    dataToSearch.addIndex("description") // sets the index attribute for the data
    dataToSearch.addDocuments(resources) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { resources, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? resources : searchResults
    return (
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto" }}>
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
          <div>
            Number of items:
            {queryResults.length}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "4px",
                border: "1px solid #d3d3d3",
              }}
            >
              <thead style={{ border: "1px solid #808080" }}>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Tool
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Version
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Description
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "5px",
                      fontSize: "14px",
                      fontWeight: 600,
                      borderBottom: "2px solid #d3d3d3",
                      cursor: "pointer",
                    }}
                  >
                    Usefull Links
                  </th>
                </tr>
              </thead>
              <tbody>
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.tool}`}>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {item.tool}
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {item.version}
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        {item.description}
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        <a href={item.links}>{item.links}</a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default SearchProject