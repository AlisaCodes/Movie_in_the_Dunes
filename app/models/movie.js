import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  director: DS.attr(),
  year: DS.attr(),
  run_time: DS.attr(),
  description: DS.attr()
});
