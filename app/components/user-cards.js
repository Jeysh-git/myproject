import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    selected_option:"All Employees",
    team:null,

    teamslist : computed ('team',function(){
        return this.get('team')
    }) ,

    teams: computed ('members.@each.team',function(){
        return this.members.mapBy('team').uniq()
    }),

    init() {
        this._super(...arguments);
        this.set('team',this.get('members').filterBy('team') );
      },

    actions: {
        
        getTeams(teamName) {
            
            this.set("selected_option",teamName);
            this.set('team',this.get('members').filterBy('team',teamName) )

        }  ,
    }

});
     