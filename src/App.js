import React, { Component } from 'react';
import Course from './Course';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: Array(3).fill().map(() => ({ credit: 4, grade: 3.0 })),
    };
  }

  addCourse() {
    console.log('hh');
    this.setState(prevState => ({
      courses: [...prevState.courses, { credit: 4, grade: 3.0 }]
    }));
  }

  handleChange(i, course) {
    const courses = this.state.courses.slice();
    courses[i] = course;
    this.setState({
      courses: courses
    });
  }

  render() {
    let totalGrade = 0;
    let totalCredit = 0;
    const courses = this.state.courses.map((course, i) => {
      totalCredit += course.credit;
      totalGrade += course.grade * course.credit;

      return (
        <Course key={i} i={i} handleChange={this.handleChange.bind(this)} />
      );
    });

    return (
      <div>
        <p className="title has-text-grey">NU GPA Calculator</p>
        <p className="subtitle has-text-grey">Select credits and grade to calculate GPA. Click '+' to add more courses</p>
        <p className="subtitle has-text-grey has-text-weight-bold">Credits - Grade</p>
        {courses}
        <button
          className="button is-primary is-rounded"
          onClick={this.addCourse.bind(this)}>
          +
        </button>
        <div className="control is-centered">
          <div className="gpa tags has-addons">
            <span className="tag is-dark">GPA</span>
            <span className="tag is-info">{(totalGrade / totalCredit).toFixed(2)}</span>
          </div>
        </div>
        <div>
          <p className="footer-contact is-size-7 has-text-weight-semibold">
            <a target="_blank" href="https://fb.me/sjsakib">
              fb.me/sjsakib
            </a>
            &nbsp; · &nbsp;
            <a target="_blank" href="mailto:sjsakib.bd@gmail.com">
              sjsakib.bd@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;