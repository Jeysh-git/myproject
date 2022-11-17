import Component from '@ember/component';

export default Component.extend({
    actions: {
        buttonAction(act){
            if(act!=null)
            this.get(act)();
            
        }
    }
})