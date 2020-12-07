// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//create a function
const code = (string) => {
//split the string to make into an array
let arr = string.split("")
// console.log(arr)
let newArray = []
//iterate thru each element of the newly made array
//use a for loop to iterate thru each element
    for (let i = 0; i < arr.length; i++) {
//have if statements that will catch whenever the element is equal to any of the condition
        if(arr[i] === 'a'){
            newArray.push('4')

        }else if(arr[i] === 'e'){
            newArray.push('3')

        }else if(arr[i] === 'i'){
            newArray.push('1')

        }else if(arr[i] === 'o'){
            newArray.push('0')

        }else{
            newArray.push(arr[i])
        }
    }
    // return the new array joined
    return newArray.join("")
}

// console.log(code(secretCodeWord1))
// console.log(code(secretCodeWord2))

//More efficent solution
const code1 = (string) => {
    let arr = string.split("")
    arr = arr.map(value => value === 'a' ? value = '4': value)
    arr = arr.map(value => value === 'e' ? value = '3': value)
    arr = arr.map(value => value === 'i' ? value = '1': value)
    return arr.map(value => value === 'o' ? value = '0': value).join("")
}

// console.log(code1(secretCodeWord1))
// console.log(code1(secretCodeWord2))




// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//create a function
const letRem = (array) => {
//iterate through each element in the array
//will probably use a filter 
//in each iteration check to see if the element contains/includes the letter a
return array.filter(value => value.includes('a') || value.includes('A'))
//return the array
}

// console.log(letRem(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true


//create a function
//make a for loop to iterate thru each element
//push each new element into a newarray
//if an element is the same as before push it into a new array
//determine the lengths of the arrays generated
//if there are arrays with a length of 2 and 3 then return true
//else it is false


//create a function
//have a count variable ready
//each time there is a new element in the array add to the count
//if same element add to count
//if not same element start a new count2 
// check if counts have a total of 3 and 2

const house = (array) => {
    let first = array[0]
    let arr1 = []
    let arr2 = []
    let arr3 = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] === first){
            arr1.push(array[i])
        }else{
            arr2.push(array[i])
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if(arr2[i] === arr2[0]){
            arr3.push(arr2[i])
        }
    }

    if(arr3.length === 2 && arr1.length === 3){
        return true
    }else if(arr1.length === 2 && arr3.length === 3){
        return true
    }else{
        return false
    }
}

// console.log(house(hand1))
// console.log(house(hand2))
// console.log(house(hand3))
// console.log(house(hand4))


// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false

// console.log(house(hand5))
// console.log(house(hand6))



// *************************** Attempted solution for more efficent runtime and space  ************************************************

const house1 = (array) => {
    array = array.sort()
    // console.log(array)
    let first = array[0]
    let arr1 = []
    let arr2 = []
    let arr3 = []
    // let arr4 = []
    // for (let i = 0; i < array.length; i++) {
    //     if(array[i] === first){
    //         arr1.push(array[i])
    //     }else{
    //         arr2.push(array[i])
    //     }
    // }

    arr1 = array.filter(value => value === first)
    arr2 = array.filter(value => value !== first)

    // for (let i = 0; i < arr2.length; i++) {
    //     if(arr2[i] === arr2[0]){
    //         arr3.push(arr2[i])
    //     }
    // }

    arr3 = arr2.filter(value => value === arr2[0])
    // arr4 = arr2.filter(value => value !== arr2[0])

    // if(arr3.length === 2 && arr1.length === 3){
    //     return true
    // }else if(arr1.length === 2 && arr3.length === 3){
    //     return true
    // }else{
    //     return false
    // }
    return arr3.length === 2 && arr1.length === 3 ? true : arr1.length === 2 && arr3.length === 3 ? true : false
    // return arr3.length === 2 && arr1.length === 3 ? true : arr1.length === 2 && arr3.length === 3 ? true : arr1.length === 2 && arr4.length === 3 ? true : arr4.length === 2 && arr1.length === 3 ? true : false

    // arr1.length === 2 && arr3.length === 3 ? true : false

    // String year = credits < 30 ? "freshman" : credits <= 59 ? "sophomore" : credits <= 89 ? "junior" : "senior";
    //cond1? if True1 : cond2? if True2 : ifFalse2;
}




console.log(house1(hand1))
console.log(house1(hand2))
console.log(house1(hand3))
console.log(house1(hand4))
console.log(house1(hand5))
console.log(house1(hand6))

