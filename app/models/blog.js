import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  title: DS.attr()
});
