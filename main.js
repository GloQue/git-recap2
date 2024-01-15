let count = 1

const addCount = () => {
    count = count + 1
    return count
}

console.log(addCount())


const arr = [1, 2, 3, 4]

const double = (item) => {
    return item * 2
}

let valOne = arr.map(double)

console.log(valOne)