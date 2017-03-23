import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('project', { path: '/projects' }, function() {
    this.route('new');
    this.route('detail', { path: '/:id' }, function() {
      this.route('new-pledge');
    });
  });
});

export default Router;
