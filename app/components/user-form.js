import Component from '@ember/component';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    
    formbuttons:null,
    selectedoption: '',
    teams: '',
    store: service(),
    teamlists:'',

    init(){
        this._super(...arguments);
            
        this.set('formbuttons', [
            EmberObject.create({ classname: 'apply-btn',title:'Apply',actionName:'form-submit-action'}),
            EmberObject.create({ classname: 'reset-btn',title:'Reset',actionName:'form-reset-action'}),
            
          ]);   
        
        let teams =  this.store.peekAll('user').mapBy('team').uniq().filter(element => element!=undefined);
        this.set('teamlists',teams)
    },

   
    actions: {
        apply(){
           //submit logic  
           //to handle uploaded image files and mention respective paths 
         },
        
         reset(){
            // reset logic
        },

        selectTeams(team){
            this.set('selectedoption',team)
            this.get('member').set('team',this.selectedoption)
        }
        
    }
});