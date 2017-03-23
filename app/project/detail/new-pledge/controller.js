import Ember from 'ember';
import config from 'punchstarter/config/environment';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    price: '',
    ships_to: '',
    delivery_date: '',
    description: '',
  },

  actions: {
    save() {
      fetch(`${config.apiUrl}/pledge-levels`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({ ...this.formValues, project_id: this.model.id })
    }).then(r => r.json())
      .then(() => {
        this.transitionToRoute('project.detail.index');
      });
    },
  },
});
