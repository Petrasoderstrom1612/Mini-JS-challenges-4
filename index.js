/*------------------------ DEFAULT PARAMETER ------------------------------*/

const setPermissionLevels = (admin, ...names) => { //instead of names you can write rest, this takes into consideration all parameters after the arguments without ... have been used, here we only have admin as parameter without dots, rest parameter comes always last
    names.forEach((oneName)=> console.log(`Hello ${oneName}, you have been assigned ${admin} rights.`))
}

setPermissionLevels("admin", "Peter", "Monika", "Hasse")

/*-----*/ 

function getLabelsHtml(text, sender, ...employees) {   
    const christmasCards = employees.map((oneEmployee) =>{ //you map over the rest parameter as if the 3dots ... werent there and thewe was instead [], it is an array
    return `<div class="label-card">
       <p>Dear ${oneEmployee.name}</p>
       <p>${text}</p>
       <p>Best wishes,</p>
       <p>${sender}</p>
    </div>`
    }).join("")
    
    return christmasCards
 }
 
 const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
 const sender = 'Petra, VD'
 
 document.getElementById('labels-container').innerHTML = getLabelsHtml(
     text, 
     sender, 
     {name: 'Sally'}, 
     {name: 'Mike'}, 
     {name: 'Rob'}, 
     {name: 'Harriet'}
     ) 
 
/*------------------------ SPREAD OPERATOR ------------------------------*/

const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
const sweetMenu = ['Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']

console.log(...lunchMenu) //is not given any type, just the [] is removed from around the words

const entireWeddingMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu] //all 3 arrays concatenated together
console.log(entireWeddingMenu)


const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3]
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8]
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7]

/*-----find lowest & highest price in 4 arrays----*/
function findPriceExtremes(arr){
  
    const highest = Math.min(...arr)
    const lowest = Math.max(...arr);
    console.log(`The highest average share price was ${highest}`)
    console.log(`The lowest average share price was ${lowest}`)
}


findPriceExtremes([...averageSharePriceByMonthQ1,...averageSharePriceByMonthQ2,...averageSharePriceByMonthQ3,...averageSharePriceByMonthQ4])

/*------------------------ ternary ||------------------------------*/

const jobHunter = {
    name: 'Tom Chant',
    jobSearchArea: 'Europe',
}

const jobArea = jobHunter.jobSearchArea || "Worldwide"

console.log(`${jobHunter.name}'s work location is ${jobArea}`)

/*----*/

const profile = {
    // name: 'Tom Chant',
    nickname: 'TChant44',
    workLocation: 'Europe',
    }

const profileName = profile.name || profile.nickname //by default use name, if a person did not register his name, use his nickname

console.log(`Hey ${profileName}!`)

/*------------------------ SHORT-CIRCUITING ------------------------------*/
//if left is true, perform action after &&
const user ={
    name: "Petra",
    role: "admin"
}


user.role === "admin" && allowAccess() //once the left side it truthy, the code goes into the && part, otherwise nothing happens 

function allowAccess () {                                          //if you would use arrow function, you need to initialize it prior to the ternary operator.
    console.log(`Hello ${user.name}, you have been allowed access.`)
}

/*----*/

const accountBalanceUsd = '$45,000,000,000 🤑💰'
const swissBankPassCodesArr = [1234,5678,9876,3434]

function authenticationCheck(passCode){
   swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd) //if the code is one of the codes in the array, then console.log the user'b balance
}

authenticationCheck(3434)

/*-- CREATING OBJECTS VIA CONSTRUCTORS --*/

/*------------------------ creating Constructor and instances------------------------------*/
function Character(name){ //with big capital letter
    this.name = name,
    this.collectedItemsArr = []
    this.addItem = function addItem(item){
                   this.collectedItemsArr.push(item)
                     return console.log(`${this.name} has ${this.collectedItemsArr.join(", ")}.`)
                     // console.log(`${name} now has:`, ...this.collectedItemsArr)  if you want to use spread operator, this will ommit , in between
                   }
}

const petra = new Character("Petra",)
petra.addItem("sweater")
petra.addItem("wand")
petra.addItem("cape")

const david = new Character("David")
david.addItem("flower")

/*------------------------ creating Class (with constructor) and instances------------------------------*/
//The same constructors as above, just here, you define class instead of Instance. The difference is class has only name in capital letters and curlies. The constructor - fixed word takes in the arguments.
//All functions are after the constructor without the word function

class Character1{
    constructor(name1){
    this.name1 = name1,
    this.collectedItemsArr1 = []
    }

    addItem1(item){
        this.collectedItemsArr1.push(item)
            return console.log(`${this.name1} has ${this.collectedItemsArr1.join(", ")}.`)
            // console.log(`${name} now has:`, ...this.collectedItemsArr)  if you want to use spread operator, this will ommit , in between
    }
}

const petra1 = new Character1("Petra",)
petra1.addItem1("sweater")
petra1.addItem1("wand")
petra1.addItem1("cape")

const david1 = new Character1("David")
david1.addItem1("flower")

/*------------------------ TRY CATCH ------------------------------*/

const addTuristCharge = (additionalCharge) => {
    try{
        if (Number.isInteger(additionalCharge)){
            console.log(`Total cost is ${100 + additionalCharge}`)
        } else {
            throw Error("argument is not a string")
        }
    }
    catch (error){
        console.log(`error: ${error}`)
    }
}


addTuristCharge("60")