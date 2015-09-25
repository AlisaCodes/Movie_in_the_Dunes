import DS from 'ember-data';

export default DS.Model.extend({
  movie: DS.belongsTo('movie', {async: true}),
  username: DS.attr(),
  feedback: DS.attr()
});
