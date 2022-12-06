import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({
    cardtogglebutton:'',
    hasModalOpen:false,
    popupbuttons:null,
    user:'',

    init(){
       
        this._super(...arguments);

        this.set('cardtogglebutton', [
                EmberObject.create({ icon: "list-view",path:"users-listview"}),
        ]); 
            
        this.set('popupbuttons', [
                EmberObject.create({ classname: 'save-btn',title:'Save',actionName:'del-ok-action'}),
                EmberObject.create({ classname: 'cancel-btn',title:'Cancel',actionName:'del-cancel-action'}),
        ]); 
    },

    actions: {

        openDeleteModal(userRecord){
            this.set('hasModalOpen',true);
            this.set('user',userRecord);

        },

        confirmDelete(){
            this.user.destroyRecord();
            this.set('hasModalOpen',false);

        },

        closeDeleteModal(){
            this.set('hasModalOpen',false);
        }


    }
    

});