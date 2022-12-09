
const generateContent = () =>{
    const content = document.createElement('div')
    content.setAttribute('id','content')

    document.body.appendChild(content)
}

const navBar = () =>{
    const home = document.createElement('div')
    const menu = document.createElement('div')
    const aboutUs = document.createElement('div')

    home.setAttribute('id','home')
    menu.setAttribute('id','menu')
    aboutUs.setAttribute('id','aboutUs')

    home.textContent = "Home"
    menu.textContent = "Menu"
    aboutUs.textContent = " About Us "

    content.appendChild(home)
    content.appendChild(menu)
    content.appendChild(aboutUs)
}

export { generateContent,navBar };