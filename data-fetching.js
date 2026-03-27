
// const fetchUsers = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// it is a error catch test

// const fetchUsers = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             throw new Error("this a fucking error"); 
//         })
//         .catch(error => console.log(error.message, "i am in catch block"));
//                                               //catch block a amra error dhorte parbo
// }


const fetchUsers = async() => {
    //loading spineer true
    try{
        const url = "https://jsonplaceholder.typicode.com/users"
        const res = await fetch(url)
        // throw new Error("this is a fucking error")
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err.message, "i am from catch block")
    } finally {
        console.log("i am from finally block , always triggered")
        //loading spineer false
    }
}
fetchUsers()