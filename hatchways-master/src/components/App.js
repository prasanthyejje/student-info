import React, { Component } from 'react';

import hatchways from "../hatchway_api/hatchways";
import Searchbar from "./SearchView";
import Student from "./StudentView";

class App extends Component {
  state = {
    searchName: "",
    searchTag: "",
    students: [],
    tags: []
  };

  getTags = studentId => this.state.tags.filter(tag => tag.studentId === studentId);

  addTag = (studentId, label) => this.setState({
    tags: [
      ...this.state.tags,
      {
        tagId: `${studentId}-${new Date().getTime()}`,
        studentId,
        label
      }
    ]
  });

  handleSearchChange = e => this.setState({ [e.target.id]: e.target.value });

  componentDidMount() {
    hatchways.get()
      .then(res => {
        this.setState({ students: res.data.students});
      })
      .catch(err => console.log(err));
  };
  
  renderRoster = () => {
    const { searchName, searchTag, students } = this.state;
    const studentComponent = student => {
      return (
        <Student
          key={student.id}
          student={student}
          tags={this.getTags(student.id)}
          addTag={this.addTag}
        />
      )
    }

    return students
      .filter(student => {
        const name = `${student.firstName} ${student.lastName}`;
        const searchNameRE = new RegExp(searchName, "i");
        const nameFound = name.match(searchNameRE);

        let tagFound = true;
        if (searchTag !== "") {
          tagFound = false;
          const tags = this.getTags(student.id);
          const searchTagRE = new RegExp(searchTag, "i");
          if (tags.length > 0) tagFound = tags.some(tag => tag.label.match(searchTagRE));
        }

        return nameFound && tagFound;
      })
      .map(student => studentComponent(student));
  }

  render() {
    return (
      <div className="container">
        <div className="view">
          <Searchbar
            searchName={this.state.searchName}
            searchTag={this.state.searchTag}
            handleSearchChange={this.handleSearchChange}
          />
          <div className="roster">
            {this.renderRoster()}
          </div>
        </div>
      </div>
    );
  };
}

export default App;
