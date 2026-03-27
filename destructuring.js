//array destructuring
const array = [1, 2, 3, 4, 5, 6, 7, 8,]
let [one, two, three, four, , , , eight] = array;
// console.log(one, two, three, four, eight)

const king = ["john snow", "rab stark", "aria stark", "robart barathian", "ned stark" ]
const [john, rab , , ,ned] = king
// console.log(john,rab, ned)


//object destructuring
const king2 = {
    name: "John",
    address: "winterfall",
    age: 30,
    queen: " denayris tergarian",
    skill:{
        mind: "brave",
        body: "strong",
        fight: "warrior"
    },
    isBrave: true,
    language: "english",
    hobby: "fuck deniries",
    location:{
        division: "north",
        address: {
            streetNumber: "A12",
            houseNumber: "h32"
        }
    }
}
const{age, name, queen, address, ...rest} = king2
// console.log(age, name, queen, address, rest)

// const{location}= king2
// const{location:{address:locationAddress}} = king2 //address variable double hoye jasse tai name change kore locationAddress kora hoise. aivabe amra same name hole access korte pari
const{location:{address:{houseNumber}}} = king2
console.log(houseNumber)