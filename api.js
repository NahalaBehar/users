// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

let grandfather = document.createElement("div")
grandfather.id = "grandfather"
document.body.appendChild(grandfather)

let search = document.createElement("input")
search.placeholder = "search..."
grandfather.appendChild(search)
search.id = "search"


async function users(){
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    console.log(data);


    let father = document.createElement("div")
    father.id = "father"
    grandfather.appendChild(father)

    data.users.map(user=>{
        let card = document.createElement("div")
        card.className = "cards"
        father.appendChild(card)
        let img = document.createElement("img")
        img.src = user.image
        img.style.height = "200px"
        img.style.width = "180px"
        card.appendChild(img)
        let name_ = document.createElement("div")
        name_.innerHTML = "Name: "+user.firstName+" "+user.lastName
        card.appendChild(name_)
        let age = document.createElement("div")
        age.innerHTML = "age: "+user.age
        card.appendChild(age)
        let city = document.createElement("div")
        city.innerHTML = "hometown: "+user.address.city
        card.appendChild(city)
        let email = document.createElement("div")
        email.innerHTML = "email: "+user.email
        card.appendChild(email)
    })
}

users()

search.oninput=()=>{
   data.users.map(user=>{
    if(!(user.firstName.includes(search.value))){
        user.style.display = "none"
    }
   })
 }