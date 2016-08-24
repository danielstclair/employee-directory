import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>Hello There!</div>
	);
}

// After Meteor loads in browser, render app into DOM
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});
