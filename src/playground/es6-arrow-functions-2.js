// arguments objects - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a+b;
};

console.log(add(55, 1));


const addArrow= (a, b) =>{
    // console.log(arguments); NOT AVAILABLE IN ARROWS
    return a+b;
};

console.log(add(55, 1));
console.log(addArrow(55, 1));


// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        const self = this;
        this.cities.forEach(function (city) {
            console.log(self.name + ' has lived in ' + city)
        })
    },
    printPlacesLivedArrow: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city) //WITHOUT SELF
        })
    },
    printPlacesLived2() { //without FUNCTION WORD
        return this.cities.map((city)=>this.name + ' has lived in ' + city);
    },
};

// user.printPlacesLived();
// user.printPlacesLivedArrow();
console.log(user.printPlacesLived2());


//CHALLENGE AREA

const multiplier = {
    numbers :[1,2,3],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((newArr) => newArr * this.multiplyBy)
    },
};

console.log(multiplier.multiply());

