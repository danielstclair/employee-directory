import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker'

Meteor.startup(() => {
	// Check to see if data exists in the collection
	const numberRecords = Employees.find({}).count();
	console.log(numberRecords);
	if (!numberRecords) {
		// Generate some data...
		_.times(5000, () => {
			const { name, email, phone } = helpers.createCard();
			Employees.insert({
				name,
				email,
				phone,
				avatar: image.avatar()
			});
		});
	}

	Meteor.publish('employees', function(per_page) {
		// Will need to refactor in order to add more records
		return Employees.find({}, { limit: per_page });
	})
});


//Our server defines publications while our client defines subscriptions
