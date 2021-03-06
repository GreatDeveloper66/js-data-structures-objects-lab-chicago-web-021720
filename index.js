// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  let copy = Object.assign({},driver);
  copy[key] = value;
  return copy;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver,key) {
  let copy = Object.assign({},driver);
  delete copy[key];
  return copy;
}

function destructivelyDeleteFromDriverByKey(driver,key) {
  delete driver[key];
  return driver;
}
