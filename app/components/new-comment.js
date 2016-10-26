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

    saveComment() {
      var params = {
        author1: this.get('author1'),
        content: this.get('content'),
        date: moment().format("LL LTS"),
        blog: this.get('blog')
      };
      console.log(this.get('author1'));
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
