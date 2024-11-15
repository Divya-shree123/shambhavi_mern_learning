const numbers=[1,2,3,4,5];
const double=number.map(num => num*2);
console.log (doubled);
const  filter_numbers=[1,2,3,4,5];
const evenNumbers=filter_numbers.filter(num => num%2 === 0);
console.log(evenNumbers);

const sum_numbers=[1,2,3,4,5];
const sum=sum_numbers.reduce(accumalator, currentValue) => accumalator
console.log(sum);