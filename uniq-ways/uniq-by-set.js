let values = [
    {_id:"m-1", robot:{_id:1}},
    {_id:"m-2", robot:{_id:1}},
    {_id:"m-3", robot:{_id:1}},
    {_id:"m-4", robot:{_id:1}},
    {_id:"m-5", robot:{_id:2}},
]

const uniqValues = [...new Set(values.map((value)=>value.robot._id))]
console.log(uniqValues, 'using set')