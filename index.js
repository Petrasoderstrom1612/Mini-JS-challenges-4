const setPermissionLevels = (admin, ...names) => { //instead of names you can write rest, this takes into consideration all parameters after the arguments without ... have been used, here we only have admin as parameter without dots, rest parameter comes always last
    names.forEach((oneName)=> console.log(`Hello ${oneName}, you have been assigned ${admin} rights.`))
}

setPermissionLevels("admin", "Peter", "Monika", "Hasse")

/*------------------------ christmas cards ------------------------------*/

function getLabelsHtml(text, sender, ...employees) {   
    const christmasCards = employees.map((oneEmployee) =>{ //you map over the rest parameter as if the ... werent there, note that it is an array
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
 