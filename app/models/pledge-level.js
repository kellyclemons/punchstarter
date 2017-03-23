import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr('number'),
  ships_to: DS.attr(),
  delivery_date: DS.attr(),
  description: DS.attr(),

  // each pledge level must point to a parent object
  project: DS.belongsTo('project'),
});
