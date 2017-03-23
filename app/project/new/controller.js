import Ember from 'ember';
// const apiUrl = 'https://punchstarter-api.herokuapp.com/kellyclemons/basic/projects';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: '',
    video_url: '',
    description: '',
    campaign: ''
  },

  actions: {
    submitForm() {
      // Create a new project with our form values
      const project = this.store.createRecord('project', this.formValues);

      project.save().then((project) => {
        // Clear form values
        this.set('formValues', {});
        // Redirect to index route
        this.transitionToRoute('project.detail', project.id);
      });
    },
  },
});
