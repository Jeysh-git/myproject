import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    
    select_team:"All Employees",

    teamsl : computed ('members.@each.team',function(){
        return this.get('members').filterBy('team')
    }) ,

    teams: computed ('members.@each.team',function(){

        return this.members.mapBy('team').uniq()
      
    }),
   
    actions: {
        
        getTeams(teamName) {
            this.set("select_team",teamName);
           return this.set('teamsl',this.get('members').filterBy('team',teamName) )
            // return this.teamsl;
        }  ,

        sortByFields(name){
            return this.set('teamsl',this.get('members').sortBy(name))
        },
    
}

});
     