import React, { Component } from "react";

class Searchbar extends Component {
  handleSubmit = e => e.preventDefault();
  
  render() {
    return (
      <form className="search" action="submit" onSubmit={this.handleSubmit}>
        <div className="search__bar">
          <input
            id="searchName"
            className="search__bar__input"
            type="text"
            placeholder="Search by name"
            value={this.props.searchName}
            onChange={this.props.handleSearchChange}
          />
          <label
            htmlFor="searchName"
            className="search__bar__label"
          >Search by name</label>
        </div>
        <div className="search__bar">
          <input
            id="searchTag"
            className="search__bar__input"
            type="text"
            placeholder="Search by Tag"
            value={this.props.searchTag}
            onChange={this.props.handleSearchChange}
          />
          <label
            htmlFor="searchTag"
            className="search__bar__label"
          >Search by Tag</label>
        </div>
      </form>
    )
  };
}

export default Searchbar;
