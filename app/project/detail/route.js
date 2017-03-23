import Ember from 'ember';
// import config from 'punchstarter/config/environment';

export default Ember.Route.extend({
  model(params) {
    const id = params.id;

    this.store.findRecord('project', id);

    // return fetch(`${config.apiUrl}/projects/${id}`)
    // .then(r => r.json());
  }
});
