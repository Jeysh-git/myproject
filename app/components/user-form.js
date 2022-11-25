import Component from '@ember/component';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';


export default Component.extend({
    
  formbuttons:null,
  selectedoption: '',
  teams: '',
  store: service(),
  router:service(),
  teamlists:'',
  hasValidationFailed:false,
  imageValidationFailed:false,
  attr:'',
  imageplaceholder:'/assets/images/profilepic.png',


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
      team:'',
      image:''
     })
    this.set('selectedoption','');
    this.set('hasValidationFailed',false);
    this.set('imageplaceholder','/assets/images/profilepic.png');
    this.set('imageValidationFailed',false);
    document.querySelector('#file-upload').value = null;
    
     
  },

  actions: {
    apply(){
      let user = this.get('member');
      user.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
            user.save();
            this.get('router').transitionTo('users');
        }
        else{
          this.set('hasValidationFailed',true) 
          
        }
    });
      
    },
        
    reset(){
      this.resetModel();
      
    },
    
    selectTeams(team){
      this.set('selectedoption',team)
      this.get('member').set('team',this.selectedoption)
    },

    removeUncommitedModel(){
      let user = this.get('member');
      
     if(user.get('isNew')){
          user.destroyRecord();
     }
  
  }

        
  }
});