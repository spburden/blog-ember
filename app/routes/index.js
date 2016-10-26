import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('blog');
  },
  actions: {
    saveEntry3(params) {
      var newEntry = this.store.createRecord('blog', params);
      newEntry.save();
      this.transitionTo('index');
    }
  }
});
