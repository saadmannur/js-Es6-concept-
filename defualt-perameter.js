const defPera = (a, b = 5, c = 2) => a * b * c;
const result = defPera(10, 20,)
console.log(result)

const defPera2 = (name="Good Man") => {
    console.log(`Hello mr. ${name} good morning`)
}
defPera2("pappu")
defPera2()
defPera2("noor")

