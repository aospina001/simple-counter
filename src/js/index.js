// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom";

// //include bootstrap npm library into the bundle
// import "bootstrap";

// //include your index.scss file into the bundle
// import "../styles/index.scss";

// //import your own components
// import { Home } from "./component/home.js";

// //render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));

import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleOne = this.handleOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	handleOne() {
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleMinusOne() {
		this.setState(prevState => {
			return {
				count: prevState.count - 1
			};
		});
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById("app"));
