import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('movie', params.movie_id);
  },
  actions: {
    addComment(params) {
     var newComment = this.store.createRecord('comment', params);
     newComment.save();
     params.movie.save();
     debugger
     this.transitionTo('movie', params.movie);
    },
  }
});
