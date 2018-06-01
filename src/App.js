import React, { Component } from 'react';
import Course from './Course';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [{ credit: 4, grade: 3.0 }]
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
    const courses =  this.state.courses.map((course, i) => {
      totalCredit += course.credit;
      totalGrade += course.grade*course.credit;
      
      return <Course key={i} i={i} handleChange={this.handleChange.bind(this)} />
    });

    return (
      <div>
        {courses}
        <button onClick={this.addCourse.bind(this)}>+</button>
        <p>{ (totalGrade/totalCredit).toFixed(2) }</p>
      </div>
    );
  }
}

export default App;