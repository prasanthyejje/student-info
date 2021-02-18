import React, { Component, Fragment } from "react";

import Testscores from "./Testscores";
import Tags from "./TagView";

class Student extends Component {
  state = {
    collapsed: true
  };

  handleCollapse = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    const { collapsed } = this.state;
    const { student, tags, addTag } = this.props;
    const avgGrade = student.grades.reduce((total, grade) => total += parseInt(grade), 0) / student.grades.length;
    const expandSign = "fas fa-plus";
    const collapseSign = "fas fa-minus";
  
    return (
      <div className="student">
        <img
          className="student__picture"
          src={student.pic}
          alt={`${student.firstName} ${student.lastName}`}
        />
        <div className="student__details">
          <h2 className="student__details__name">{`${student.firstName} ${student.lastName}`}</h2>
          <button
            className="student__details__showmore"
            onClick={this.handleCollapse}
          >
            <i className={collapsed ? expandSign : collapseSign}></i>
          </button>
          <ul className="student__details__information">
            <li className="student__details__detailInfo">Email: {student.email}</li>
            <li className="student__details__detailInfo">Company: {student.company}</li>
            <li className="student__details__detailInfo">Skill: {student.skill}</li>
            <li className="student__details__detailInfo">Average: {avgGrade}&#37;</li>
          </ul>
          {
            collapsed ?
              null :
              <Fragment>
                <Testscores id={student.id} scores={student.grades} />
                <Tags id={student.id} tags={tags} addTag={addTag} />
              </Fragment>
          }
        </div>
      </div>
    );
  };
}

export default Student;
