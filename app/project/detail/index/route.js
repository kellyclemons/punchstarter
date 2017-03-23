import Ember from 'ember';
import config from 'punchstarter/config/environment';

export default Ember.Route.extend({
  model() {
    // Request part of the URL from 'project.detail' route
    const id = this.paramsFor('project.detail').id;

    return fetch(`${config.apiUrl}/projects/${id}`)
    .then(r => r.json());
  }
});
