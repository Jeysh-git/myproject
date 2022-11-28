import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    deletePopupmodal:false,
    store:service(),

    actions: {
        deleteEmployee(){
        
            this.set('deletePopupmodal',true);
          
        },

        confirmDelete(){
            this.employeeinfocard.destroyRecord();
           this.set('deletePopupmodal',false)
           
        },

    }

});
