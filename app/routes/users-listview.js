import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.findAll('user').
          then((results) => results.filter(user => !user.get('isNew')))
      } ,
});
