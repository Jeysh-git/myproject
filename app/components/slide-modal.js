import Component from '@ember/component';

export default Component.extend({
  
    
    actions: {
        buttonAction(actionName){
            if(this.get(actionName))
            this.get(actionName)();
            
        },
    
    
}
})