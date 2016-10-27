import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log(params);
    if(params !== ""){
    return this.store.query('blog', {
      orderBy: 'category',
      equalTo: params.category,
      limitToLast: 5
      });
    } else {
      return this.store.findAll('blog');
    }
  },
  actions: {
    saveEntry(params) {
      this.store.createRecord('blog', params).save();
      this.transitionTo('index');
      window.location.reload(true);
    }
  }
});
