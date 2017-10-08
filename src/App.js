import React from 'react';
import Navbar from './Navbar';

// There are 2 ways to create a component

// Second way
// Class, Container, Stateful, and Smart component
// Constructor
class App extends React.Component {


	constructor(){
		super();

		this.state = {
			username:'accimeesterlin',
			age:20
		}
	}

	getData() {
		console.log("Hello World!!!");

	}

	sendData(){
		console.log("Hello World!!!");
	}

	render() {
		return(
			<div>
				<Navbar />
				<h1>Hello World!!!</h1>
			</div>
		);
	}
}




export default App;