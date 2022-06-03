/*
    CIT 281 Project 3
    Name: Nakisha Lin 
*/
function validDenomination(coin) {
    return [1, 5, 10, 25, 50, 100].indexOf(coin) != -1;
}

function valueFromCoinObject(obj) {
    //const denom = 0;
    // const count = 0;
    // const {denom , count } = obj;
    const { denom = 0, count = 0 } = obj;
    return denom * count;
}


function valueFromArray(arr) {
    //fuction valueFromCoinObject(obj){
    //  let result =0
    //  for (let i-0; i<arr.length; i<++){
    //        result += valueFromCoinObject(arr[i])
    //}  
    //     return result;
    //}
    if (Array.isArray(arr[0])) {
        arr = arr[0];
    }
    return arr.reduce((accumulator, currentObj) => accumulator + valueFromCoinObject(currentObj), 0);

}


function coinCount(...coinage) {
    return valueFromArray(coinage);
}

//module.exports = function anExportedFunc() {
//   return "yup simple as that";
//};

module.exports = {
    coinCount
};

//const fs = require('fs');

//const { coinCount} = require('./p3-module.js');


console.log("{}", coinCount({ denom: 5, count: 3 }));
console.log("{}s", coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }));
const coins = [{ denom: 25, count: 2 }, { denom: 1, count: 7 }];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins)); // Extra credit