import Component from '@ember/component';

export default Component.extend({

    employees:null,
    
    actions: {
        getEmployeeList(list){
         
            this.set('employees',list)
        }
  
    }

});