import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    teamsl : computed ('members.@each.team',function(){
        return this.get('members').filterBy('team')
    }) 
});