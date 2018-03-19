const square = function (x) {
    return x * x;
};

console.log(square(2));

const squareArrow = (x) => {  // ARROW FUNCS ARE ANONYMOUS
    return x*x;
};
console.log(squareArrow(8));


const squareArrow2= (x) => x*x;
console.log(squareArrow2(3));


const fullName = 'Dimon Stolyarov';

function getFirstName(full) {
    return full.split(" ")[0];
}

console.log(getFirstName(fullName));

var getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow(fullName));


