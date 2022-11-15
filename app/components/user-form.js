import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({
    
    formbuttons:null,

    init(){
        this._super(...arguments);

        this.set('formbuttons', [
            EmberObject.create({ classname: 'apply-btn',title:'Apply',isSubmit:true}),
            EmberObject.create({ classname: 'reset-btn',title:'Reset',isSubmit:false}),
            
          ]);

    },

   
    actions: {
        apply(){

           //submit logic
           
           
         },
         reset(){
            // reset logic
        },
    }
});
