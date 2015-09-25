import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment() {
      var params = {
        movie: this.get('movie'),
        username: this.get('username'),
        feedback: this.get('feedback'),
      };
      this.sendAction('addComment', params)
    }
  }
});
