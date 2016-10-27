import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    blogFormShow() {
      this.set('addNewPost', true);
    },

    blogFormHide() {
      this.set('addNewPost', false);
    },

    saveEntry() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author'),
        image: this.get('image'),
        date: new Date().getTime(),
        category: "Hipster",
      };
      this.set('addNewPost', false);
      this.sendAction('saveEntry', params);
    }
  }
});
