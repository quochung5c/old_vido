var arr = ["bun bo", "mi tom", "mi hai san", "com rang", "com rang thap cam"];
var str = "meat and food";
// var res = str.split(' ');
// console.log(res);
var forFilter = [];
arr.forEach(element => {
  forFilter.push(element.split(" "));
});
var query = "bun";
var res = forFilter.filter(element => {
  return element[0] === query;
});
var ids = ["a3b", "ad4", "1vas"];
console.log(ids.indexOf("ad4"));
