// Given five positive integers, find the minimum and maximum 
// values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a 
//  single line of two space-separated long integers.

// First Array to be Sorted

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
// console.log(points)

function minMax(arr){
    let min = 0;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(i < arr.length - 1){
            min = min + arr[i] 
        }
        if(i > 0){
            max = max + arr[i]
        }
    }
    return [min, max]
}
const arr = [1, 2, 3, 4, 5]

console.log(minMax(arr))