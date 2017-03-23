import Ember from 'ember';
// import config from 'punchstarter/config/environment';

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
      const pledgeLevel = this.store.createRecord('pledge-level', this.formValues);

      // this.model is the model from 'project/detail'
      pledgeLevel.set('project', this.model);

      return pledgeLevel.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('project.detail.index');
      });
    },
  },
});
