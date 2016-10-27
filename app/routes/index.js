import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog'),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
    saveEntry(params) {
      this.store.createRecord('blog', params).save();
      this.transitionTo('index');
      window.location.reload(true);
    }
  }
});
