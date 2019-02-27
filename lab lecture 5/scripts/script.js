/*eslint-env browser*/

/*
var arr = ["Sally Smith", "Sue Jones", "Mark Stevens", "Paco Martinez"];
window.console.log(arr[1]);
*/


//counts the names:
/*
var arr = ["Sally Smith", "Sue Jones", "Mark Stevens", "Paco Martinez"];
window.console.log(arr.length);
*/


//lists all 4 names:
//USING FOR LOOP
/*
var i, arr = ["Sally Smith", "Sue Jones", "Mark Stevens", "Paco Martinez"];
for (i = 0; i < arr.length; i += 1) {
    window.console.log(arr[i] + "\n");
}
*/


//USING FOREACH LOOP (same result)
//cleaner syntax/cleaner code:

/*
var arr = ["Sally Smith", "Sue Jones", "Mark Stevens", "Paco Martinez"];
arr.forEach(function (arr) {
    "use strict";
    window.console.log(arr);
});
*/


//USING FOR IN LOOP
//"slickest way to write arrays"
//"most elegant solution of the 3"

/*
var arr = ["Sally Smith", "Sue Jones", "Mark Stevens", "Paco Martinez"];
var element;
for (element in arr) {
//  if (arr.hasOwnProperty(element)) { -- to eliminate the error
    window.console.log(arr[element]);
}
*/
//His fix to above:
/*
Array.prototype.addNew = function () {
    "use strict";
    window.alert("Hello");
}
*/

//USING FILTER:
var arr = ["Sally Smith", 10, "Sue Jones", 5, "Mark Stevens", 15, "Paco Martinez", 30];
var yearsWithCompany = arr.filter(function (item) {
    "use strict";
    return typeof item === "number";
});
window.console.log(yearsWithCompany);