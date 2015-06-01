
/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    array.forEach(callback);
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var sumArr = 0;
    args.forEach(function(value, index, list) {
      sumArr = value + sumArr;

    });
    console.log(sumArr);
    return sumArr;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var avgArr = 0 ;
    args.forEach(function(value, index, list) {
      avgArr = value + avgArr;
    });
    console.log(avgArr/args.length);
    return avgArr/args.length
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var large = 0;
    args.forEach(function(value, index, list) {
      if (value > large) {
        large = value;
      }

    });
    console.log(large);
    return large;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var long = "";
    args.forEach(function (value, index, list) {
      if (value.length > long.length) {
        long = value;
      }
    });
    console.log(long);
    return long;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
    function sort() {
      var args = [].slice.call(arguments);
      var sorted = args.sort();
      console.log(sorted);
      return sorted;

    };

// .concat()
  var array1 = ["Baltimore", "Denver", "Miami", "San Fransico"]
  var array2 = ["Jacksonville", "Austin", "Albany"];

  var arrayConcat = array1.concat(array2);
  console.log(arrayConcat);

// .indexOf()
  var arr = [1, 5, 8, 2, 4, 6];
  console.log(arr.indexOf(8));

  console.assert( arr.indexOf(8) === 2);

// .split()
  var str = "How are you today?";
  console.log(str.split(""));

// .join()
  console.log(str.split("").join(""));

// .pop()
  var popArr = ["Oranges", "Apples", "Bannanas", "Grapes", "Strawberries"];
  popArr.pop();
  console.log(popArr);

// .push()
  var pushArray = ["Water", "Coffee", "Tea", "Soda"];
  pushArray.push("Milk");
  console.log(pushArray);

// .slice()
  var sports = ["Football", "Soccer", "Baseball", "Basketball"];
  console.log(sports.slice(1, 3));

// .splice()
  var browers = ["Chrome", "Explorer", "Safari"];
  browers.splice(2, 0, "Firefox");
  console.log(browers);

// .shift()
  var grocery = ["Bi-Lo", "Publix", "Whole Foods", "Trader Joe's"];
  grocery.shift();
  console.log(grocery);

// .unshift()
  var grocery = ["Bi-Lo", "Publix", "Whole Foods", "Trader Joe's"];
  grocery.unshift("Food Lion", "Giant");
  console.log(grocery);

// .filter()
  var array = [1, "two", 3, "four", 5];
  var number = array.filter(function(val) {
      if (typeof val === 'number') {
        return true;
      }
      else {
        return false;
      }
  });
  console.log(number);

// .map()
  var arrayMap = [1, 6, 4, 28, 20, 50, 3];
  var arrayMapNew = arrayMap.map(function plusFive(num) {
      var numPlusFive = num + 5;
      return numPlusFive;
  });

  console.log(arrayMapNew);
