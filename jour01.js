console.log("Hello world !") //01

var test = "My name is Jong" //02
console.log(test)

var lastName = "CHONG" //03
console.log("Nice to meet you " + lastName)

var testLength = "I'm very long !" //04
console.log(testLength.length)

var food = "croissant is meh" //05
food = food.replace("meh","so good")
console.log(food)

var basic = "This is Cool" //06
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()
console.log(basic, basicUp, basicDown)

var word = "banana" //07
var letters = word.split()
console.log(letters)

var age = 35 //08
console.log(`I'm ${age} years old`)

//Bonus

var testsubstring = "I'm very long !"
testsubstring = testsubstring.substring(2, 10)
console.log(testsubstring)

var guillemets = 'I\'m very long !'
console.log(guillemets)
var doublequotes = "I\"m very long !"
console.log(doublequotes)
var DeuxLignes = "I'm very \n long !"
console.log(DeuxLignes)

var changed = "Bonjour"
changed = changed.replace("o", "a")
changed = changed.replace("o", "a")
console.log(changed)
