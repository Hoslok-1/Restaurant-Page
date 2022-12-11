export const container1 = document.createElement('div')



const generateMenu = () =>{
    container1.style.display = 'block'
    document.body.appendChild(container1)
    container1.setAttribute('id','container1')
}

const navBar = ()  =>{
    const navBar = document.createElement('div')
    container1.appendChild(navBar)

    navBar.classList.add('navBar')

    home.setAttribute('id','home')
    menu.setAttribute('id','menu')
    aboutUs.setAttribute('id','aboutUs')

    home.textContent = "Home"
    menu.textContent = "Menu"
    aboutUs.textContent = " About Us "

    navBar.appendChild(home)
    navBar.appendChild(menu)
    navBar.appendChild(aboutUs)
}

export {generateMenu,navBar}