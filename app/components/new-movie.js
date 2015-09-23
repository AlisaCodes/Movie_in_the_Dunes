import Ember from 'ember';

export default Ember.Component.extend({
  addNewMovie: false,
  actions: {
    movieFormShow() {
    this.set('addNewMovie', true);
  },

    save1() {
      var params = {
        title: this.get('title'),
        director: this.get('director'),
        year: this.get('year'),
        run_time: this.get('run_time'),
        image: this.get('image'),
        description: this.get('description'),

      };
      this.set('addNewMovie', false),
      this.sendAction('save2', params);
    }
  }
});
