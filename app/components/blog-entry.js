import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    delete(blog) {
      if (confirm('Are you sure you want to delete this blog entry?')) {
        this.sendAction('destroyEntry', blog);
      }
    },
    update(blog) {
        var params = {
          title: this.get('title'),
          body: this.get('body'),
          author: this.get('author'),
          image: this.get('image'),
          date: this.get('date'),
        };
        this.set('updateRentalForm', false);
        this.sendAction('updateEntry', blog, params);
    },
    editFormHide() {
      this.set('updatePostForm', false);
    },
    showEdit() {
      this.set('updatePostForm', true);
    }
  }
});
