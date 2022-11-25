import Route from '@ember/routing/route';

export default Route.extend({

    editmodeOn:true,

    model(params) {
        return this.store.findRecord('user', params.user_id);
    },

});
