import Ember from 'ember';


function sortByDate(a, b) {
    var x = a._data.date;
    var y = b._data.date;
    return (x<y) ? 1 : -1;
};

export function dateSort(params) {
  if (params[1] === 1) {
    params[0].content.currentState.sort(sortByDate);
  } else {
    params[0].content.sort(sortByDate);
  }
};

export default Ember.Helper.helper(dateSort);
