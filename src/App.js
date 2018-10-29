import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class LambdaDemo extends Component {
	constructor(props) {
		super(props)
		this.state = { loading: false, message: null }
	}

	handleClick = e => {
		e.preventDefault()

		this.setState({ loading: true })
		fetch('/.netlify/functions/williwaste')
			.then(response => response.json())
			.then(json => this.setState({ loading: false, message: json.message }))
	}

	render() {
		const { loading, message } = this.state

		return (
			<p>
				<button onClick={this.handleClick}>
					{loading ? 'Loading...' : 'Call Lambda'}
				</button>
				<br />
				<span>{message}</span>
			</p>
		)
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<LambdaDemo />
				</header>
			</div>
		)
	}
}

export default App
