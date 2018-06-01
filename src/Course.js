import React, { Component } from 'react';

class Course extends Component {
	constructor(props) {
		super(props);

		this.state = {
			credit: 4,
			grade: 3.0
		};
	}

	handleCreditChange(event) {
		const change = {
			credit: Number(event.target.value)
		};

		this.setState(change);
		this.props.handleChange(this.props.i, { ...this.state, ...change });
	}

	handleGradeChange(event) {
		const change = {
			grade: Number(event.target.value)
		};
		this.setState(change);
		this.props.handleChange(this.props.i, { ...this.state, ...change });
	}

	render() {
		return (
			<div>
				<div className="field is-grouped is-grouped-centered">
					<div className="control">
						<div className="select">
							<select
								value={this.state.credit}
								onChange={this.handleCreditChange.bind(this)}>
								<option value="1"> 1 </option>
								<option value="2"> 2 </option>
								<option value="3"> 3 </option>
								<option value="4"> 4 </option>
							</select>
						</div>
					</div>
					<div className="control">
						<div className="select">
							<select
								value={this.state.grade}
								onChange={this.handleGradeChange.bind(this)}>
								<option value="4"> A+ </option>
								<option value="3.75"> A </option>
								<option value="3.5"> A- </option>
								<option value="3.25"> B+ </option>
								<option value="3"> B </option>
								<option value="2.75"> B- </option>
								<option value="2.5"> C+ </option>
								<option value="2.25"> C </option>
								<option value="2"> D </option>
							</select>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Course;