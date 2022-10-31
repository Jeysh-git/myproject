import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    selected_option:null,
    sort_option:null,
    sort_order:null,
    isSelected:null,

    
    teamslist : computed ('selected_option','sort_option','sort_order',function(){
        console.log("hellooo",this.sort_order,this.sort_option);
       // this.set('isSelected',false)
        if(this.sort_order==='asc'){
            if(this.selected_option!='All Employees')
            
                return this.get('members').filterBy('team',this.get('selected_option')).sortBy(this.get('sort_option'))
            else
                return this.get('members').filterBy('team').sortBy(this.get('sort_option'))
        }
        else {
            if(this.selected_option!='All Employees')
                return this.get('members').filterBy('team',this.get('selected_option')).sortBy(this.get('sort_option')).reverse()
            else
                return this.get('members').filterBy('team').sortBy(this.get('sort_option')).reverse()
        }
    }) ,

    teams: computed ('members.[]',function(){
        let teamNames =  this.members.mapBy('team').uniq();
        teamNames.push('All Employees');
        return teamNames;
       
   }),
    
    init() {
        this._super(...arguments);
        this.set('selected_option','All Employees')
        this.set('sort_option','first_name')
        this.set('sort_order','asc')

        },

    actions: {
        
        getTeams(teamName) {
            this.set('selected_option',teamName);
        }  ,

        sortByFields(field){
            this.set(this.isSelected,field)
            // if(!this.isSelected){

           this.set('sort_option',field);
        //    if(field)
        //    this.toggleProperty('isSelected')
        //     }
        //    else{
        //     this.toggleProperty('isSelected')
        //    }

        },

        isSelectedValue(field) {
            return this.isSelected === field;

        },

        sortByFieldsInOrder(order){
            this.set('sort_order',order)
        
        }
    }

});