//map, filter, find, reduce
const products = [
    // 📱 Phones
    {
        id: 1,
        category: "phone",
        brand: "Apple",
        model: "iPhone 15",
        price: 1700,
        storage: 128,
        inStock: true,
        company: {
            name: "dragoon",
            bs: "BST"
        }
    },
    {
        id: 2,
        category: "phone",
        brand: "Samsung",
        model: "Galaxy S23",
        price: 950,
        storage: 256,
        inStock: true,
        company: {
            name: "dragoon",
            bs: "BST"
        }
    },
    {
        id: 3,
        category: "phone",
        brand: "Xiaomi",
        model: "Redmi Note 12",
        price: 300,
        storage: 128,
        inStock: false,
        company: {
            name: "dragoon",
            bs: "BST"
        }
    },
    {
        id: 4,
        category: "phone",
        brand: "OnePlus",
        model: "OnePlus 11",
        price: 800,
        storage: 256,
        inStock: true,
        company: {
            name: "dragoon",
            bs: "BST"
        }
    },
    {
        id: 5,
        category: "phone",
        brand: "Google",
        model: "Pixel 8",
        price: 999,
        storage: 128,
        inStock: false,
        company: {
            name: "dragoon",
            bs: "BST"
        }
    },

    // 💻 Laptops
    {
        id: 6,
        category: "laptop",
        brand: "Apple",
        model: "MacBook Air M2",
        price: 1300,
        ram: 8,
        inStock: true,
        company: {
            name: "dragoon",
            bs: "BST"
        }
    },
    {
        id: 7,
        category: "laptop",
        brand: "Dell",
        model: "XPS 13",
        price: 1100,
        ram: 16,
        inStock: true,
        company: null,
    },
    {
        id: 8,
        category: "laptop",
        brand: "HP",
        model: "Pavilion 15",
        price: 700,
        ram: 8,
        inStock: false,
        company: {
            name: "dragoon",
            bs: "BST"
        }
    },
    {
        id: 9,
        category: "laptop",
        brand: "Lenovo",
        model: "ThinkPad X1",
        price: 1400,
        ram: 16,
        inStock: true,
        company: {
            name: "dragoon",
            bs: "BST"
        }
    },
    {
        id: 10,
        category: "laptop",
        brand: "Asus",
        model: "ROG Zephyrus",
        price: 1600,
        ram: 32,
        inStock: false,
        company: {
            bs: "BST"
        }
    }
];

//map
const newProducts = products.map((pd) => {
   return pd.price >= 1000 ? { ...pd, isExpensive: true } : { ...pd, isExpensive: false }
})
// console.log(newProducts)

//filter
const laptops = products.filter(pd => pd.category == "laptop")
// console.log(laptops)
const expensivePhones = products.filter(pd => pd.price >= 800 && pd.category == "phone")
// console.log(expensivePhones)

const expensiveLaptop = products.filter(pd => pd.price >= 1000 && pd.category == "laptop")
.map(pd => (
    {
        brand: pd.brand,
        model: pd.model, 
        price: pd.price,
        companyName: pd.company?.name  // (?) optional chaining(thakle daw na thakle dorkar nei)
    }))  //method chaining
console.log(expensiveLaptop)

