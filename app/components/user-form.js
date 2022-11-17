import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({
    
    formbuttons:null,
    selectedoption: '',
    teams: '',

    init(){
        this._super(...arguments);

        this.set('teams',['Freshteam1','Freshteam2','Freshteam3','Freshteam4'])
            

        this.set('formbuttons', [
            EmberObject.create({ classname: 'apply-btn',title:'Apply',actionName:'form-submit-action'}),
            EmberObject.create({ classname: 'reset-btn',title:'Reset',actionName:'form-reset-action'}),
            
          ]);
        
       

    },

   
    actions: {
        apply(){
           //submit logic  
         },
         reset(){
            // reset logic
        },

        selectTeams(teamname){
            
            this.set('selectedoption',teamname)
            this.get('member').set('team',this.selectedoption)
        }
        
    }
});