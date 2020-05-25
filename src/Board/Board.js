import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
	blueColor = "#6495ee";
	redColor = "red";
	constructor(props) {
		super(props);
		this.state = {
			chosenBoard: -1
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(chosenBoard) {
		this.setState({
			chosenBoard
		});
	}

	render() {
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div
						onClick={() => this.handleClick(1)}
						style={{borderColor: this.state.chosenBoard === 1 ? this.redColor : this.blueColor}}
						className="Board-option">
						1
					</div>
					<div
						onClick={() => this.handleClick(2)}
						style={{borderColor: this.state.chosenBoard === 2 ? this.redColor : this.blueColor}}
						className="Board-option">
						2
					</div>
					<div
						onClick={() => this.handleClick(3)}
						style={{borderColor: this.state.chosenBoard === 3 ? this.redColor : this.blueColor}}
						className="Board-option">
						3
					</div>
				</div>
			</div>
		);
	}
}

export default Board;