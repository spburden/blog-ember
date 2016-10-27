import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    filterCat() {
      category: this.get('category.value');
      var cat = $(category).val();
      this.sendAction('filterCat', cat);
    }
  }
});
