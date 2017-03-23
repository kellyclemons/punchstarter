import Ember from 'ember';

export default Ember.Route.extend({
  // Load date for the current page
  model() {
    return this.store.findAll('project');
  }
});
