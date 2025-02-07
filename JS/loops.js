function Sum(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i]
    }
    return sum
}

let numbers = [4,3,2,5,6,5]
console.log(`Total sum is : ${Sum(numbers)}`)
