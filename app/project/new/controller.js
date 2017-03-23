import Ember from 'ember';
const apiUrl = 'https://punchstarter-api.herokuapp.com/kellyclemons/basic/projects';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
    video_url: '',
    description: '',
    campaign: ''
  },

  actions: {
    save() {
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(this.formValues),
      }).then(r => r.json())
        .then((project) => {

        // Redirect
        this.transitionToRoute('project.detail', project.id);
      });
    },
  },
});
