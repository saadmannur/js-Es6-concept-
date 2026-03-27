const person = {
    name : "mahamud",
    age: 7
}
const computer = {
    monitor: "LG",
    display: "superAmulate",
    SSD: "8GB",
    storage: "256GB"
}

const newObject = {
    ...person, ...computer
}
console.log(newObject)