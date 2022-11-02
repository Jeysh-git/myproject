import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';


export default Component.extend({

    selected_option:null,
    sort_option:null,
    sort_order:null,
    sortfieldList:null,
    sortorderlist:null,
    
    teamslist : computed ('selected_option','sort_option','sort_order',function(){

        let teamlistArray = this.get('members').filterBy('team',this.get('selected_option')).sortBy(this.get('sort_option'));
        let allteamlistArray = this.get('members').filterBy('team').sortBy(this.get('sort_option'))
    
        if(this.sort_order==='Ascending'){
            if(this.selected_option!='All Employees')
                return teamlistArray;
            else
                return allteamlistArray;
        }
        else {
            if(this.selected_option!='All Employees')
                return teamlistArray.sort((item1, item2) => (item1 > item2 ? -1 : 1))
            else
                return allteamlistArray.sort((item1, item2) => (item1 > item2 ? -1 : 1))
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
        this.set('sort_order','Ascending')

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