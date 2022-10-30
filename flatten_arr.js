// flatten nested array

function flatten_arr (arr){
    return arr.reduce((total, current_val) => total.concat(Array.isArray(current_val) ? flatten_arr(current_val) : current_val), [])
}

const arr = [
    1, 3, [5, 6, [7, [6, 5], 4], 3], [4]
]

console.log(flatten_arr(arr))