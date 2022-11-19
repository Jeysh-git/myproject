import DS from 'ember-data';
import { computed } from '@ember/object';
import {buildValidations,validator} from 'ember-cp-validations';
const models = [
    {
      modelAttr: "first_name",
      presence: true,
      regexp: /^[a-zA-Z]+$/,
      formatErrorMessage: 'First name field should have alphabets only',
      minLength: 2,
      maxLength:128,
      lengthErrorMessage: 'First name should have atleast two characters'
    },

    {
        modelAttr: "last_name",
        presence: true,
        regexp: /^[a-zA-Z]+$/,
        formatErrorMessage: 'Last name field should have alphabets only',
        minLength: 2,
        maxLength:128,
        lengthErrorMessage: 'Last name should have atleast two characters'
      },

    {
      modelAttr: "email",
      presence: true,
      regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      formatErrorMessage: 'The email is not valid format'
    },

    {
        modelAttr: "designation",
        presence: true,
        regexp: /^[a-zA-Z]+$/,
        formatErrorMessage: 'The name field should have alphabets only',
        minLength: 2,
        maxLength:128,
        lengthErrorMessage: 'Designation should have atleast two characters'
      },
    
  ]
  
  const Validations = {};
  // iterating the models json and set each validator for a model
  models.forEach(model => {
    buildValidations[model.modelAttr] = {
      validators: [
        validator('presence', {
          presence: model.presence,
          message: `${model.modelAttr} is required`
        }),
        validator('format',{
          regex: model.regexp,
          message: model.formatErrorMessage
        }),
        validator('length', {
          min: model.minLength,
          max: model.maxLength,
          message: model.lengthErrorMessage
        })
      ]
    };
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
