const content = document.createElement('div')
export const container = document.createElement('div')
export const home = document.createElement('div')
export const menu = document.createElement('div')
export const aboutUs = document.createElement('div')


const generateContent = () =>{
    content.setAttribute('id','content')

    document.body.appendChild(content)
}

const navBar = () =>{
    const navBar = document.createElement('div')
    content.appendChild(container)
    container.appendChild(navBar)
    container.classList.add('container')
    navBar.classList.add('navBar')
    container.classList.add('container')

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

const textInitial = () =>{
    const bigMiddleText = document.createElement('div')
    bigMiddleText.classList.add('middleText')

    const topText = document.createElement('div')
    const bottomText = document.createElement('div')
    topText.classList.add('topText')
    bottomText.classList.add('bottomText')
    topText.textContent = "welcome to a totally real hotel"
    bottomText.textContent = "ah yes we serve a lot of food here, totally real food. Would you like to have some of this non-fake food? Head over to our menu tab to see what you can order.(still dont understand webpack :/ )"    
    bigMiddleText.appendChild(topText)
    bigMiddleText.appendChild(bottomText)
    container.appendChild(bigMiddleText)
    
}

const footer = () =>{
    const footerInitial = document.createElement('div')
    const footerText = document.createElement('div')

    footerInitial.classList.add('footer')
    footerText.classList.add('footerText')


    footerText.textContent = "Made by Hoslok-1"

    container.appendChild(footerInitial)
    footerInitial.appendChild(footerText)
}

export { generateContent,navBar,textInitial,footer };

