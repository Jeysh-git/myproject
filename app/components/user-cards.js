import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    selected_option:null,
    
    teamslist : computed ('selected_option',function(){
        if(this.selected_option!='All Employees')
            return this.get('members').filterBy('team',this.get('selected_option'))
        else
            return this.get('members').filterBy('team')
        
    }) ,

    teams: computed ('members.@each.team',function(){
        return this.members.mapBy('team').uniq()

    }),
    
    init() {
        this._super(...arguments);
        this.teams.push('All Employees')
        this.set('selected_option','All Employees')
        },

    actions: {
        
        getTeams(teamName) {

            this.set('selected_option',teamName);
          
        }  ,

        sortByFields(field){
            this.set('team',this.get('members').sortBy(field))
        }
    }

});