function mapToNegativize(array){
    let result = [];
    array.forEach(n => result.push(-1 * n))
    return result
}

function mapToNoChange(array){
    let result = [];
    array.forEach(n => result.push(n))
    return result
}

function mapToDouble(array){
    let result = [];
    array.forEach(n => result.push(2 * n))
    return result
}

function mapToSquare(array){
    let result = [];
    array.forEach(n => result.push(n**2))
    return result
}

function reduceToTotal(array, startingPoint = 0){
    let s = startingPoint
    array.forEach(n => s = s + n)
    return s
}

function reduceToAllTrue(array){
    for (let i = 0; i < array.length; i++){
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array){
    for (let i = 0; i < array.length; i++){
        if (array[i]) return true
        
    }
    return false
}



