import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    email: DS.attr('string'),
    team: DS.attr('string'),
    image: DS.attr('string'),
    joiningDate: DS.attr('date'),

    fullName: computed('first_name', 'last_name', function() {
        return `${this.first_name} ${this.last_name}`;
    })
});
