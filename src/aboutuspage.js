import Icon4 from './icon4.jpeg'

const myIcon4 = new Image()
myIcon4.src = Icon4

export const container3 = document.createElement('div')

export const home = document.createElement('div')
export const menu = document.createElement('div')

export const content = document.createElement('div')
content.setAttribute('id','content')

const generateAboutUs = () =>{
    container3.setAttribute('id','container3')
    document.body.appendChild(content)
    content.appendChild(container3)
    
}

const aboutUsNavbar = () =>{
    const navBar = document.createElement('div')
    const aboutUs = document.createElement('div')
    container3.appendChild(navBar)
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

const mainText = ()=>{
    const mainText = document.createElement('div')
    mainText.textContent = "About our owner"
    container3.appendChild(mainText)
    mainText.classList.add('headingAboutUs')

}

const aboutUsText = () =>{
    const text = document.createElement('div')
    container3.appendChild(text)
    text.classList.add('aboutUsText')


    const textLeft = document.createElement('div');
    text.appendChild(textLeft);
    textLeft.classList.add('textLeft')
    textLeft.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu semper lacus, ut laoreet orci. In tristique magna eget condimentum auctor. Suspendisse dictum sem mauris, ac blandit sem malesuada nec. Fusce ac finibus velit, eget bibendum eros. Nulla facilisi. Mauris fringilla, eros at ullamcorper aliquam, risus lacus interdum sapien, eget faucibus mauris magna non nulla. Duis eu tincidunt sem. Aliquam vulputate metus leo, sed porta magna maximus eget. Phasellus vehicula, felis nec vestibulum ultricies, ante metus porta sapien, vel pretium diam erat non dolor. Donec ut diam hendrerit, eleifend tellus nec, ornare libero. Nullam neque libero, venenatis vel ultricies nec. "
    
    text.appendChild(myIcon4)

    myIcon4.setAttribute('id','img4')
}

const footer = () =>{
    const footerInitial = document.createElement('div')
    const footerText = document.createElement('div')

    footerInitial.classList.add('footer')
    footerText.classList.add('footerText')


    footerText.textContent = "Made by Hoslok-1"

    container3.appendChild(footerInitial)
    footerInitial.appendChild(footerText)
}


export {generateAboutUs,aboutUsText,aboutUsNavbar,mainText,footer}