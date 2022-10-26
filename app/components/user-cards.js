import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    select_team:"All Employees",
    team:null,

    teamsl : computed ('team',function(){
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
            
            this.set("select_team",teamName);
            this.set('team',this.get('members').filterBy('team',teamName) )

        }  ,
    }

});
     