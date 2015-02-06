function range(start, end, step) {
  // Write a range function that takes two arguments, start and end,
  // and returns an array containing all the numbers from start up to (and including) end.
    var array = [];
    (step === undefined) ? step = 1 : step = step;
    if(step < 0) {
        for(var i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    if(step > 0) {
        for(var j = start; j <= end; j+= step) {
            array.push(j);
        }
    }
    return array;
}

function sum(numbers) {
  // Write a sum function that takes an array of numbers
  // and returns the sum of these numbers.
    var sumOfNum = 0;
    for(var i = 0; i < numbers.length; i++) {
        if(!isNaN(numbers[i])) {
            sumOfNum += numbers[i];
        }
    }
    return sumOfNum;
}

function reverseArray(arr) {
  // Write a function which takes an array as argument
  // and produces a new array that has the same elements in the inverse order.
    var newArr = [];
    for(var i = arr.length - 1 ; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
  // Write a function that does what the reverse method does:
  // it modifies the array given as argument in order to reverse
  // its elements. It should not use the standard reverse method.
    var lenVal = arr.length;
    var middle = Math.floor(lenVal/2);
    var lower = 0;
    var upper;
    while(lower != middle) {
        upper = lenVal - lower - 1;
        var x = arr[lower];
        arr[lower] = arr[upper];
        arr[upper] = x;
        lower++;
    }
    return arr;
}

function arrayToList(arr) {
  // Objects, as generic blobs of values, can be used to build all
  // sorts of data structures. A common data structure is the list
  // (not to be confused with the array). A list is a nested set of
  // objects, with the first object holding a reference to the second,
  // the second to the third, and so on.
  // For example:
  //
  // var list = {
  //   value: 1,
  //   rest: {
  //     value: 2,
  //     rest: {
  //       value: 3,
  //       rest: null
  //     }
  //   }
  // };
  //
  // Write a function arrayToList that builds up a data structure like
  // the previous one when given [1, 2, 3] as argument. It should use
  // helper function prepend.
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--)
        list = {value: arr[i], rest: list};
    return list;
}

function listToArray(list) {
  // Write a function that produces an array from a list
    var array = [];
    for (var i = list; i; i = i.rest)
        array.push(i.value);
    return array;
}

function prepend(item, list) {
  // Write a function which takes an element and a list and creates a new list
  // that adds the element to the front of the input list.
    return {value: item, rest: list};
}

function nth(n, list) {
  // Write which takes a list and a number and returns the element at the
  // given position in the list, or undefined when there is no such element.
  // It should be recursive.
    if(n==0 && list.value!=undefined)
        return list.value;
    if(n==1 && list.rest==undefined)
        return undefined;
    return nth(n-1, list.rest);
}

function deepEqual(a, b) {
  // The == operator compares objects by identity. But sometimes,
  // you would prefer to compare the values of their actual properties.
  //
  // Write a function, deepEqual, that takes two values and returns true
  // only if they are the same value or are objects with the same
  // properties whose values are also equal when compared with
  // a recursive call to deepEqual.
    if(a === b) return true;
    else if(typeof a == 'object' && typeof b == 'object') {
            var numOfA = 0, numOfB = 0;     
        for( var i in a) {
            numOfA += 1;
            if(deepEqual(a[i], b[i]) == false) return false;
        }
        for( var j in b)
            numOfB += 1;
        if(numOfA == numOfB) return true;
        else return false;
    }else return false;
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEqual: deepEqual
}
