import DS from 'ember-data';
import { computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations'

const Validations = buildValidations({
    first_name: [
        validator('presence', true),
        validator('length', {
            min: 2,
            max:128
          })
        ],
    last_name: [
        validator('presence', true),
        validator('length', {
        min: 2,
        max:128
      })
    ],
    designation: [
        validator('presence', true),
        validator('length', {
        min: 2,
        max:128
      })
    ],
  
    email: [
      validator('presence', true),
      validator('format', { type: 'email' })
    ],
  
   
  });

export default DS.Model.extend( Validations,{

    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    email: DS.attr('string'),
    designation: DS.attr('string'),
    team: DS.attr('string'),
    image: DS.attr('string'),
    joiningDate: DS.attr('date'),

    fullName: computed('first_name', 'last_name', function() {
        return `${this.first_name} ${this.last_name}`;
    })
});
