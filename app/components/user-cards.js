import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({

    selected_option:null,
    sort_option:null,
    sort_order:null,
    isSelected:null,
    isSelectedOrder:null,
    sortfieldList:null,
    sortorderlist:null,
    
    teamslist : computed ('selected_option','sort_option','sort_order',function(){
    
        if(this.sort_order==='Ascending'){
            if(this.selected_option!='All Employees')
            
                return this.get('members').filterBy('team',this.get('selected_option')).sortBy(this.get('sort_option'))
            else
                return this.get('members').filterBy('team').sortBy(this.get('sort_option'))
        }
        else {
            if(this.selected_option!='All Employees')
                return this.get('members').filterBy('team',this.get('selected_option')).sortBy(this.get('sort_option')).reverse()
            else
                return this.get('members').filterBy('team').sortBy(this.get('sort_option')).reverse()
        }
    }) ,

    teams: computed ('members.[]',function(){
        let teamNames =  this.members.mapBy('team').uniq();
        teamNames.push('All Employees');
        return teamNames;
       
    }),

    sortfieldArrayList: computed('sortfieldList.[]',function(){
        return this.sortfieldList.filterBy('title')
    }),

    sortorderArrayList:computed('sortorderlist.[]',function(){
        return this.sortorderlist.filterBy('field')
    }),
    
    init() {
        this._super(...arguments);
        this.set('selected_option','All Employees')

        this.set('sortfieldList', [
            EmberObject.create({ field: 'first_name',title:'First Name' }),
            EmberObject.create({ field: 'last_name',title:'Last Name' }),
            EmberObject.create({ field: 'joiningDate',title:'Joining Date' }),
          ]);

        this.set('sortorderlist', [
            EmberObject.create({ field: 'Ascending' }),
            EmberObject.create({ field: 'Descending' }),
          ]);

        this.set('sort_option','first_name')
        this.set('sort_order','Ascending')
        this.set('isSelected','first_name');
        this.set('isSelectedOrder','Ascending')

        },

    actions: {
        
        getTeams(teamName) {
            this.set('selected_option',teamName);
        }  ,

        sortByFields(field){
            this.set('isSelected',field)
            this.set('sort_option',field);
        },

        sortByFieldsInOrder(order){
            this.set('isSelectedOrder',order)
            this.set('sort_order',order)
        
        }
    }

});