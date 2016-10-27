import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('blog', {path: '/blog/:blog_id'});
  this.route('index', {path: '/'});
  this.route('index', {path: '/:category'});
});

export default Router;
