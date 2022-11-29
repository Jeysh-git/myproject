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
  applyPopupmodal:false,
  popupmessage:'',
  popupbuttons:null,


  init(){
    this._super(...arguments);
    let teams =  this.store.peekAll('user').mapBy('team').uniq().filter(element => element!=undefined);
    this.set('teamlists',teams)

    this.set('popupbuttons', [
      EmberObject.create({ classname: 'ok-btn',title:'Ok',actionName:''}),
    ]); 

    if(!this.get('member.isNew')){
      this.set('formbuttons', [
        EmberObject.create({ classname: 'apply-btn',title:'Apply',actionName:'form-submit-action'}),
      ]);   

      this.set('selectedoption',this.get('member.team'))
      this.set('imageplaceholder',this.get('member.image')||'/assets/images/profilepic.png')
      this.set('popupmessage',"Employee updated successfully!")
    }
    else {
      this.set('formbuttons', [
      EmberObject.create({ classname: 'apply-btn',title:'Apply',actionName:'form-submit-action'}),
      EmberObject.create({ classname: 'reset-btn',title:'Reset',actionName:'form-reset-action'}),
      ]);   

      this.set('popupmessage',"Employee added successfully!")
    }
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
      let user = this.get('member')
      return user.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          user.save().then(()=>{
            document.querySelector('.employee-slide-container').style.visibility="hidden";
            this.set('applyPopupmodal',true);
             
          });           
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