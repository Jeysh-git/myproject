import Component from '@ember/component';

export default Component.extend({
    actions: {
        userRecordToDelete(){
            this.initiateDelete(this.employeeinfocard); 
        }

    }

});
