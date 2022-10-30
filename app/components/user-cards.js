import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    selected_option:null,
    sort_option:null,
    sort_order:null,
    
    teamslist : computed ('selected_option','sort_option','sort_order',function(){
        console.log("hellooo",this.sort_order,this.sort_option);
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

    teams: computed ('members.@each.team',function(){
        return this.members.mapBy('team').uniq()
    }),
    
    init() {
        this._super(...arguments);
        this.teams.push('All Employees')
        this.set('selected_option','All Employees')
        this.set('sort_option','first_name')
        this.set('sort_order','asc')
        this.set('class','selected')
        },

    actions: {
        
        getTeams(teamName) {
            this.set('selected_option',teamName);
        }  ,

        sortByFields(field){
           this.set('sort_option',field);
        },

        sortByFieldsInOrder(order){
            this.set('sort_order',order)
        }
    }

});