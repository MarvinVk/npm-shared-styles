import React, { Component } from 'react';

import Button from '../src/components/button'

export default class App extends Component {

	/**
	 * Render the component.
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<div className="app">
				<h1>Test</h1>
				<Button />
			</div>
		);
	}
}
