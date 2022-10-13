import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    teamsl : computed ('members.@each.team',function(){
        return this.get('members').filterBy('team')
    }) ,

    teams: computed ('members.@each.team',function(){

        return this.members.mapBy('team').uniq()
      
    }),

    fnamesort: computed ('members.@each.first_name',function(){
        return this.get('members').sortBy('first_name')
    }),

    fnamesortDesc: computed ('members.@each.first_name',function(){
        return this.get('members').sortBy('first_name').reverse()
    }), 

    lnamesort: computed ('members.@each.last_name',function(){
        return this.get('members').sortBy('last_name')
    }),

    lnamesortDesc: computed ('members.@each.last_name',function(){
        return this.get('members').sortBy('last_name').reverse()
    }),

    datesort: computed ('members.@each.joiningDate',function(){
        return this.get('members').sortBy('joiningDate')
    }),

    // selectedOption: null,
   
    actions: {
        
        getTeams(teamName) {
           return this.set('teamsl',this.get('members').filterBy('team',teamName) )
            // return this.teamsl;
        }  ,

        sortByFirstname(){
            return this.set('teamsl',this.fnamesort)
        },

        sortByLastname(){
            return this.set('teamsl',this.lnamesort)
        },

        sortByDate() {
            return this.set('teamsl',this.datesort)
        }
    
}

});
     