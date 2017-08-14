const arr = [1, [2, 3], [6, 10]]

const result = arr.reduce((current, next)=>{

    console.log(current)

    return current.concat(next)

}, [])

console.log(result)
