// Sorting asending
const values = [...new Set(['a', 'c', 'd', 'a', 'w'])].sort()

/* 
When the sort() function compares two values, it sends the values 
to the compare function, and sorts the values according to the returned 
(negative, zero, positive) value.

If the result is negative, a is sorted before b. 40-60 -20

If the result is positive, b is sorted before a. 100-30 70
[1,2,300,4,5,2]

round one 
1-2 ==> -1 this means 1
2-300 ==> -298 this means 2
300-4 ==> 298 this means 4
300-5 ==> 297 this means 5
300-2 ==> 298 this means 2
[1,2,4,5,2,300]

round 2
[1,2,4,2,5,300]
[1,2,2,4,5,300]
if the result is positive the b is sorted before a 
100-30 = 700
30, 100
1-3 = -2

*/

let test = [1,2,300,4,5,2, -1, 0, 2.1].sort((a, b)=>{
    return a-b
})

let test1 = [2,1].sort((a,b)=>a-b)
//console.log(test1)

// 2-1

/* 
if it is a postive value b is sorted before a 
if it is a negative value a is sorted before b
*/

let sortOrder = ['e', 'f', 's']

let data = [
    {
        year:9
    },
    {
        year:4
    },
    {
        year:0
    }
]

data.sort((a, b) => {
    return sortOrder.indexOf(a.name) > sortOrder.indexOf(b.name) ? 1: -1
})//.sort((a,b)=> b.year-a.year)
console.log(data, 'data')