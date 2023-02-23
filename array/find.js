// find - it return the value of the first element in the array

const num = [10,20,30,40,50];

const result = num.find((item)=>{
  return item > 30
})

console.log(result);