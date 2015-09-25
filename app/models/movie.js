import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comment', {async: true}),
  title: DS.attr(),
  director: DS.attr(),
  year: DS.attr(),
  run_time: DS.attr(),
  description: DS.attr(),
  image: DS.attr()
});
