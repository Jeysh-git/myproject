import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('new');
    this.route('edit',{path: '/edit/:user_id'});
  });
  this.route('users-listview', function() {
    this.route('new');
    this.route('edit',{path:'/edit/:user_id'});
  });
});

export default Router;
