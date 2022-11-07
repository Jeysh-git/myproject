import Component from '@ember/component';
import EmberObject, { computed,get } from '@ember/object';
import { debounce } from '@ember/runloop';


export default Component.extend({

    selected_option:null,
    sort_option:null,
    sort_order:null,
    sortfieldList:null,
    sortorderlist:null,
    sort_title:null,
    search: "" ,
    displaysearch:null,
    
    teamslist : computed ('selected_option','sort_option','sort_order','displaysearch',function(){

        let teamlistArray = this.get('members').filterBy('team',this.get('selected_option'));
        let allteamlistArray = this.get('members').filterBy('team')
        let sortoption = this.get('sort_option')
    
        if(this.displaysearch==null){
        if(this.sort_order==='asc'){
            if(this.selected_option!='All Employees')
                return teamlistArray.sortBy(sortoption)
            else
                return allteamlistArray.sortBy(sortoption);
        }
        else {
            if(this.selected_option!='All Employees'){
            return teamlistArray.sort(
                (item1, item2) => (get(item1,sortoption) < get(item2,sortoption)) ? 1 : (get(item1,sortoption) > get(item2,sortoption)) ? -1 : 0);
            }
            else{
            return allteamlistArray.sort(
                (item1, item2) => (get(item1,sortoption) < get(item2,sortoption)) ? 1 : (get(item1,sortoption) > get(item2,sortoption)) ? -1 : 0);
            }
        }}
        else {
            return allteamlistArray.filter((element)=> {
                if((get(element,'fullName')).toLowerCase().startsWith(this.displaysearch.toLowerCase())  || 
                (get(element,'last_name')).toLowerCase().startsWith(this.displaysearch.toLowerCase()) ){
                   return element;
             }
             else {
                return false;
             }
            });
            
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
        this.set('sort_title','First Name')

    },

    searchByEmployeeName(){
        if (this.search !== '') {
            this.set('displaysearch',this.search);
            }
        else {
            this.set('displaysearch',null);
        }
        },   

    actions: {
        
        getTeams(teamName) {
            this.set('selected_option',teamName);
        },

        sortByFields(field){
            this.set('sort_option',field);
            const title = new Map([
               [ 'first_name' , "First Name"],
               ["last_name","Last Name"],
               ["joiningDate","Joining Date"]
            ])
            this.set('sort_title',title.get(field))
        },

        sortByFieldsInOrder(order){
            this.set('sort_order',order)
        
        },

        searchEmployeeName:function(){
            debounce(this,this.searchByEmployeeName,300);
        },
    }

});