import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog'),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
    saveEntry3(params) {
      var newEntry = this.store.createRecord('blog', params);
      newEntry.save();
      this.transitionTo('index');
    }
  }
});
