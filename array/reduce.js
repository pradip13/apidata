// reduce method - add all number 

const transactions = [1,2,3,4];

let result= transactions.reduce((acc, curr)=>{
    return acc+curr;
})

console.log(result);
