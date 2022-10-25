// sort base on categories
const colors = ['red', 'blue', 'black', 'green', 'green']
const data = [{color:'green', n:1}, 
{color:'red', n: 2},
{color:'blue', n:66},
{color:'black', n:4}, 
{color:'green', n:100},
{color:'green',n: 100}, 
{color:'red', n:2},
{color:'blue', n:66},
{color:'black', n:4}, 
{color:'green', n:56}
]

let test1 = data.filter((a, index, arr) => arr.findIndex((b)=> a.color === b.color) === index)
.sort((a, b) => a.n < b.n?-1:1)
console.log(test1, 'test1')