var nameVar ='Dimon';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Azz' //ERROR
console.log('nameConst', nameConst);


//BLOCK SCOPING
function getPetName() {
    // var petName = 'Hal';
    // let petName = 'Hal';
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// getPetName()
// console.log(petName); //Is not defined


const fullName = 'Dimon Death';
let firstName;

if(fullName){
    // var firstName = fullName.split(' ')[0];
   firstName = fullName.split(' ')[0];
   console.log(firstName)
}

console.log(firstName); // if const and let not works inside if declaration
