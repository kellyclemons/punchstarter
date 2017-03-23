import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  campaign: DS.attr(),
  country: DS.attr(),
  video_url: DS.attr(),

  pledgeLevels: []
});
