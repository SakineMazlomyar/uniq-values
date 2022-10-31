const uniValues = []
const randomDuplicateValues = [1,2,3,4,5,6,6,5,4,3,2,1,0,0,100,100]

for(let value of randomDuplicateValues) {
    if(uniValues.indexOf(value) < 0) {
        uniValues.push(value)
    }
}

console.log(JSON.stringify(uniValues))