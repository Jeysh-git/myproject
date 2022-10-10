import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    teamsl : computed ('members.@each.team',function(){
        return this.get('members').filterBy('team')
    }) ,

    teams: computed ('members.@each.team',function(){

        return this.members.mapBy('team').uniq()
        
        // console.log("hi",arr1)
        // let output =  arr1.filter((item,
        //     index) => arr1.indexOf(item) === index);
        
        // // })
        // // return output;
        // console.log("hello",output)
    }),

    // selectedOption: null,
    sortProperties: '[first_name:asc]',
    sortedSongs: computed.sort('members', this.sortProperties),
    actions: {
        
        getTeams(teamName) {
           return this.set('teamsl',this.get('members').filterBy('team',teamName) )
            // return this.teamsl;
        }
    ,
        showAllTeams(){
            // console.log("helloooo")
            return this.set('teamsl',this.get('members').sortBy(function (a, b) {
                if (a.first_name < b.first_name) {
                  return -1;
                }
                if (a.first_name > b.first_name) {
                  return 1;
                }
                return 0;
                console.log(users);  
              })
              )
    },

    sortBy(sortProperties) {
              this.set('sortProperties', [sortProperties]);
              
            },    
    
}

});
     