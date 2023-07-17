
const list = [8, 3, 5, 1, 9, 2, 7, 4, 6];


const sortedList = list.sort((a, b) => b - a);


const smallestValue = sortedList[sortedList.length - 1];

console.log(sortedList);       
console.log(smallestValue); 