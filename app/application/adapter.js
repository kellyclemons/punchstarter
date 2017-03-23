import DS from 'ember-data';
import config from 'punchstarter/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
  namespace: config.DS.namespace,
});
