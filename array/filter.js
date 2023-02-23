// filter method - it will filter out value over an Array;

const transactions = ['+100','-20','+300','-100','+250'];

const result = transactions.filter((item)=>{
    if(item[0] === '+'){
        return true
    }else{
        return false;
    }
})
console.log(result);