import Ember from 'ember';


function sortByDate(a, b) {
    var x = a._data.date;
    var y = b._data.date;
    return (moment(x).isBefore(y)) ? 1 : -1;
};


export function dateSort(params) {
  var arrOfBlogs = params[0];
  console.log(arrOfBlogs.content[0]._data.date);
  arrOfBlogs.content.sort(sortByDate);
  return arrOfBlogs;
}

export default Ember.Helper.helper(dateSort);
