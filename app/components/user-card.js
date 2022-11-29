import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Component.extend({
    deletePopupmodal:false,
    store:service(),
    popupbuttons:null,

    init(){
        this._super(...arguments);
    
        this.set('popupbuttons', [
          EmberObject.create({ classname: 'save-btn',title:'Save',actionName:'del-ok-action'}),
          EmberObject.create({ classname: 'cancel-btn',title:'Cancel',actionName:'del-cancel-action'}),
        ]); 
    },

    actions: {
        deleteEmployee(){
        
            this.set('deletePopupmodal',true);
          
        },

        confirmDelete(){
            this.employeeinfocard.destroyRecord();
           this.set('deletePopupmodal',false)
           this.get('router').transitionTo('users');
           
        },

        closepopup(){
            this.set('deletePopupmodal',false)
            this.get('router').transitionTo('users')
        }

    }

});
