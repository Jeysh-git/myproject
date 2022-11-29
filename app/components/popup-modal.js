import Component from '@ember/component';
// import on from '@ember/object/evented'; 

export default Component.extend({
    actions: {
        buttonAction(actionName){
            if(this.get(actionName))
            this.get(actionName)();
            
        },
    
    
}
});
