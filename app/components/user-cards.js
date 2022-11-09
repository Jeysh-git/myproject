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
    
        if(this.selected_option!='All Employees'){
            return this.sortEmployeeList(teamlistArray,this.sort_order,sortoption,this.displaysearch)
        }   
        else{
            return this.sortEmployeeList(allteamlistArray,this.sort_order,sortoption,this.displaysearch)
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

    filterArrayElements(arrayItems,search){

            if((get(arrayItems,'fullName')).toLowerCase().startsWith(search.toLowerCase())  || 
            (get(arrayItems,'last_name')).toLowerCase().startsWith(search.toLowerCase()) ){
               return arrayItems;
         }
            else {
                return false;
         }
    },

    sortEmployeeList(arrayName,order,option,searchemployee){
        
        if(order=='asc'){
            if(searchemployee!=null){
               return arrayName.filter((element)=> this.filterArrayElements(element,searchemployee)).sortBy(option)
            }
            else
            return arrayName.sortBy(option)

        }
        else {
            if(searchemployee!=null){
                return arrayName.filter((element)=> this.filterArrayElements(element,searchemployee)).sort(
                    (item1, item2) =>(get(item1,option) < get(item2,option)) ? 1 : (get(item1,option) > 
                        get(item2,option)) ? -1 : 0);
            }
            else{
            return arrayName.sort(
                (item1, item2) =>(get(item1,option) < get(item2,option)) ? 1 : (get(item1,option) > 
                    get(item2,option)) ? -1 : 0);
            }

        }

    },
    
    actions: {
        
        getTeams(teamName) {
            this.set('selected_option',teamName);
        },

        sortByFields(field){
            this.set('sort_option',field);
            let option = this.sortfieldList.find(item => item.field === field);
            this.set('sort_title',option.title)
        },

        sortByFieldsInOrder(order){
            this.set('sort_order',order)
        
        },

        searchEmployeeName:function(){
            debounce(this,this.searchByEmployeeName,300);
        },
    }

});