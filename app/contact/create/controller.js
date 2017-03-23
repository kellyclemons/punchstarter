import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    saveContact() {
      const contact = this.store.createRecord('contact', this.formValues);

      contact.save().then(() => {
        this.set('formValues', {});

        this.transitionToRoute('contact.index');
      });
    }
  }
});
