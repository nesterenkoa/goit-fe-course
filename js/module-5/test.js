let arr =[1,2,3,4,5,6,7,8,9];

const double = arr => {
  const results = [];
  
  for (let i = 0; i < arr.length; i += 1){
    results.push(arr[i] * 2);
  }
  
  return results;
};
console.log(double(arr));


// сумма всех чисел в массиве:
  var arr = [3,2,5,6];
function arraySum(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  console.log(sum);
}
arraySum(arr);
