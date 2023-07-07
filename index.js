
const Nine5values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(Nine5values)
console.log(`The lenght of my array is: ${Nine5values.length}`)
console.log(Nine5values[0])

let LastIndex = Nine5values.length - 1
let middleIndex = Math.round(Nine5values.length/2)
console.log(Nine5values[middleIndex])
console.log(Nine5values[LastIndex])

const mixedDataTypes = [12, "hello world", {"Bitcoin" : 1}, true, 0.19, Math.PI]

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log("Numbers of companies in the array: ", itCompanies.length)
console.log(itCompanies[0])
let LastIndex_2 = itCompanies.length - 1
let middleIndex_2 = Math.round(itCompanies.length/2)
console.log(itCompanies[LastIndex_2])
console.log(itCompanies[middleIndex_2])

console.log(itCompanies.join(), `are big IT companies`)
let exist = itCompanies.indexOf("IBM")
if (exist === -1){
    console.log("The company doesn't exists in the array")
} else {
    console.log("The company does exist")
}

itCompanies.sort()
console.log(itCompanies)

itCompanies.reverse()
console.log(itCompanies)

console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
console.log(itCompanies.slice(3, 4))

itCompanies.shift()
console.log(itCompanies)
itCompanies.splice(middleIndex_2, middleIndex_2 + 1)
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
itCompanies.splice()
console.log(itCompanies)