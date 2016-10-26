import Ember from 'ember';

const ifCond = (params) => params[0] < params[1];

export default Ember.Helper.helper(ifCond);
