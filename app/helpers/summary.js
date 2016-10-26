import Ember from 'ember';

export function summary(params) {
  var body = params[0];
  var bodyArrayOfWords = body.split(".");
  var bodyArrayOfWordsSummary = [];
  for (var i = 0; i < 2; i++) {
    bodyArrayOfWordsSummary[i] = bodyArrayOfWords[i];
  }
  body = bodyArrayOfWordsSummary.join(".");
  return body + ". ...";
}

export default Ember.Helper.helper(summary);
