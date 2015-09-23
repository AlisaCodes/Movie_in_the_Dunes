import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('movie');
  },

  actions: {
   destroyMovie(movie) {
     movie.destroyRecord();
     this.transitionTo('index');
   }
 }

});
