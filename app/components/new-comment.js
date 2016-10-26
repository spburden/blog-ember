import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    commentFormHide() {
      this.set('addNewComment', false);
    },

    saveComment1() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        date: moment().format("LL LTS"),
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment2', params);
    }
  }
});
