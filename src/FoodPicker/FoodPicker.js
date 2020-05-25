import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			restaurant: "",
			meal: "",
			desert: false
		};
		this.name = React.createRef();
	}

	changeNameHandler(event) {
		this.setState({
			name: event.target.value,
		});
	}

	chooseRestaurantHandler(event) {
		this.setState({
			restaurant: event.target.value
		});
	}

	chooseFavouriteMealHandler(event) {
		this.setState({
			meal: event.target.value
		});
	}

	desertOrderHandler(event) {
		if (event.target.checked === true) {
			this.setState({
				desert: true
			});
		} else {
				this.setState({
					desert: false
				});
		}
	}

	render() {
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input
						onChange={this.changeNameHandler.bind(this)}
						type="text" />
				</div>
				<div>
					Choose restaurant:
					<select onChange={this.chooseRestaurantHandler.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input
						onChange={this.chooseFavouriteMealHandler.bind(this)}
						type="text" />
				</div>
				<div>
					Want a desert?
					<input
						onClick={this.desertOrderHandler.bind(this)}
						type="checkbox" />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.restaurant}.<br />
					We will make sure that your favorite meal, {this.state.meal} is available.<br />
					{this.state.desert === true ? "Additionally, our chef will make a special desert for you!" : ""}<br />
				</div>
			</div>
		);
	}
}

export default FoodPicker;