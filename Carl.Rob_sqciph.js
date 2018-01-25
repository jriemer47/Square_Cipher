function normalizer (str) {
  return str.match(/[a-zA-Z]/g).join('').toLowerCase();
}

console.log(normalizer('If man was meant to stay on the ground, god would have given us roots.'))


function sqrt (str) {
  let rows = Math.sqrt(str);
  let cols = str/rows;
  console.log(rows);
  console.log(cols);
  let rowsFloor = Math.floor(Math.sqrt(str));
  let rowsCeil = Math.ceil(Math.sqrt(str));
  let colsFloor = Math.floor(str/rows);
  let colsCeil = Math.ceil(str/rows);
  console.log('rows floor ' + rowsFloor);
  console.log('rows ceil ' + rowsCeil);
  console.log('cols floor ' + colsFloor);
  console.log('cols ceil ' + colsCeil);
  if (str % rows === 0) {
    return "yay";
  } else if ((colsFloor * rowsFloor) - str <=  colsFloor && (colsFloor * rowsFloor) - str >  0) {
    return "both floor"
  } else if ((colsCeil * rowsCeil) - str <= colsCeil && (colsCeil * rowsCeil) - str > 0) {
    return 'both ceil'
  } else if ((colsFloor * rowsCeil) - str <= colsFloor && (colsFloor * rowsCeil) - str > 0) {
    return 'colsFloor rowsCeil'
  } else if ((colsCeil * rowsFloor) - str <= colsCeil && (colsCeil * rowsFloor) - str > 0) {
    return 'colsCeil rowsFloor'
  }
}

console.log(sqrt(52));
