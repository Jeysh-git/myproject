import Component from '@ember/component';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';


export default Component.extend({
    
  formbuttons:null,
  selectedoption: '',
  teams: '',
  store: service(),
  teamlists:'',
  hasValidationFailed:false,


  init(){
    this._super(...arguments);
      this.set('formbuttons', [
        EmberObject.create({ classname: 'apply-btn',title:'Apply',actionName:'form-submit-action'}),
        EmberObject.create({ classname: 'reset-btn',title:'Reset',actionName:'form-reset-action'}),
        ]);   
        let teams =  this.store.peekAll('user').mapBy('team').uniq().filter(element => element!=undefined);
        this.set('teamlists',teams)
    },
  resetModel (){
    this.get('member').setProperties({
      first_name:'',
      last_name:'',
      email:'',
      designation:'',
      joiningDate:'',
      team:''
     })
     this.set('selectedoption','');
     this.set('hasValidationFailed',false);
    
     
  },

  actions: {
    apply(){
      let user = this.get('member');
      user.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
            user.save();
            alert("data saved");
            this.resetModel()
            validations.content.forEach(element=>{
            document.querySelector("input[name="+element.attribute+"]").classList.remove("requiredinput");
          })
        }
        else{
          this.set('hasValidationFailed',true) 
          validations.errors.forEach(element=>{ 
            document.querySelector("input[name="+element.attribute+"]").classList.add("requiredinput")
          })
        }
    });
      
    },
        
    reset(){
      this.resetModel();
      
    },
    
    selectTeams(team){
      this.set('selectedoption',team)
      this.get('member').set('team',this.selectedoption)
    }
        
  }
});