console.log(websites)
console.log(countries)

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.pop()
shoppingCart.push('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart[2] = 'Green tea'
console.log(shoppingCart)

let checking_kenya = countries.indexOf('Kenya')

if (checking_kenya === -1){
    console.log('KENYA does not exits in the list')
} else{
    console.log('KENYA is in the list')
}

let checking_Sass = websites.indexOf('Sass')

if (checking_Sass === -1){
    console.log('Sass is not in the list')
    websites.push('Sass')
    console.log(websites)
} else{
    console.log('Sass is a CSS preprocess')
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const Fullstack = frontEnd.concat(backEnd)
console.log(Fullstack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
let middle = Math.ceil(ages.length/2)
console.log(ages[middle])
let sum = ages.reduce(function(a, b){
    return a + b
  })

let averageAge = sum/ages.length
console.log(averageAge)

let ageRange = Math.max(ages) - Math.min(ages)
console.log(ageRange)