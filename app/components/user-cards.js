import Component from '@ember/component';
import EmberObject, { computed,get } from '@ember/object';


export default Component.extend({

    selected_option:null,
    sort_option:null,
    sort_order:null,
    sortfieldList:null,
    sortorderlist:null,
    
    teamslist : computed ('selected_option','sort_option','sort_order',function(){

        let teamlistArray = this.get('members').filterBy('team',this.get('selected_option'));
        let allteamlistArray = this.get('members').filterBy('team')
        let sortoption = this.get('sort_option')
    
        if(this.sort_order==='asc'){
            if(this.selected_option!='All Employees')
                return teamlistArray.sortBy(sortoption)
            else
                return allteamlistArray.sortBy(sortoption);
        }
        else {
            if(this.selected_option!='All Employees'){
            return teamlistArray.sort(
                (p1, p2) => (get(p1,sortoption) < get(p2,sortoption)) ? 1 : (get(p1,sortoption) > get(p2,sortoption)) ? -1 : 0);
            }
            else{
            return allteamlistArray.sort(
                (p1, p2) => (get(p1,sortoption) < get(p2,sortoption)) ? 1 : (get(p1,sortoption) > get(p2,sortoption)) ? -1 : 0);
            }
        }
    }) ,

    teams: computed ('members.[]',function(){
        let teamNames =  this.members.mapBy('team').uniq();
        let item = "All Employees";
        return [item].concat(teamNames);
       
    }),
    
    init() {
        this._super(...arguments);
        this.set('selected_option','All Employees')

        this.set('sortfieldList', [
            EmberObject.create({ field: 'first_name',title:'First Name' }),
            EmberObject.create({ field: 'last_name',title:'Last Name' }),
            EmberObject.create({ field: 'joiningDate',title:'Joining Date' })
            
          ]);

        this.set('sortorderlist', [
            EmberObject.create({ field:'asc',title: 'Ascending' }),
            EmberObject.create({ field:'desc',title: 'Descending' }),
          ]);

        this.set('sort_option','first_name')
        this.set('sort_order','asc')

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