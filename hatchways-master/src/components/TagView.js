import React, { Component, Fragment } from "react";

class Tags extends Component {
  state = { newTag: "" };

  handleTagInput = e => this.setState({ [e.target.id]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.newTag.trim() !== "") {
      this.props.addTag(this.props.id, this.state.newTag.trim());
    } else {
      alert("Cannot add a new tag with a blank label.\n\nPlease enter a label for a new tag."); // I would use Sweet Alerts here, but I don't remember if the instructions mentioned if we were allowed to use any further dependencies aside from our choice of library for API fetching?
    }
    
    this.setState({ newTag: "" });
  }

  renderTags = () => this.props.tags.map(tag => {
    return (
      <li
        key={tag.tagId}
        className="tagsList__tag"
      >
        {tag.label}
      </li>
    )
  })

  render() {
    return (
      <Fragment>
        <ul className="student__details__information tagsList">
          {this.renderTags()}
        </ul>
        <form
          className="student__details__information addTag"
          action="submit"
          onSubmit={this.handleSubmit}
        >
          <div className="addTag__container">
            <input
              id="newTag"
              className="addTag__input"
              type="text"
              placeholder="Add a tag"
              value={this.state.newTag}
              onChange={this.handleTagInput}
            />
            <label
              htmlFor="newTag"
              className="addTag__label"
            >Add a tag</label>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default Tags;
