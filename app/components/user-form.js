import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({

    title:'Add Employee',
    formbuttons:null,

    init(){
        this._super(...arguments);
        this.set('formbuttons', [
            EmberObject.create({ classname: 'apply-btn',title:'Apply' }),
            EmberObject.create({ classname: 'reset-btn',title:'Reset' }),
            
          ]);
    }
});
