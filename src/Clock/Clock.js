import React, { Component } from 'react';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clock: new Date()
		};
	}

	componentDidMount() {
		this.clockTimer = setInterval(() => {
			this.updateClock()
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.clockTimer);
	}

	updateClock() {
		this.setState({
			clock: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Clock</h1>
				The time is: {this.state.clock.toString()}
			</div>
		);
	}
}

export default Clock;