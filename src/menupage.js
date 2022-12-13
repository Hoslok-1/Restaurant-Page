import { content } from "./initialpage"
import Icon from './icon.jpg';
import Icon2 from './icon2.jpg';
import Icon3 from './icon3.jpg';

const myIcon = new Image();
myIcon.src = Icon;

const myIcon2 = new Image();
myIcon2.src = Icon2

const myIcon3 = new Image()
myIcon3.src = Icon3

export const container1 = document.createElement('div')
export const home = document.createElement('div')
export const aboutUs = document.createElement('div')
const menu = document.createElement('div')
const menuItems = document.createElement('div')

const generateMenu= () =>{
    content.appendChild(container1)
    document.body.appendChild(content)
    content.appendChild(container1)
    container1.classList.add('container1')
}

const navBar = () =>{
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

const featuredItems = () =>{
    const text = document.createElement('div')
    container1.appendChild(text)
    text.classList.add('textOffer')
    text.textContent = "Today's Featured items:"
    
    container1.appendChild(menuItems)
    menuItems.classList.add('menuItems')

    const menuItemsone = document.createElement('div')
    menuItemsone.classList.add('menuItemsOne')
    menuItems.appendChild(menuItemsone)

    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    const item3 = document.createElement('div')

    menuItemsone.appendChild(item1)
    menuItemsone.appendChild(item2)
    menuItemsone.appendChild(item3)

    item1.textContent = "item 1"
    item2.textContent = "item 2"
    item3.textContent = "item 3"

    item1.classList.add('itemOne')
    item2.classList.add('itemTwo')
    item3.classList.add('itemThree')


    item1.appendChild(myIcon)
    myIcon.classList.add('img1')

    item2.appendChild(myIcon2)
    myIcon2.classList.add('img2')

    item3.appendChild(myIcon3)
    myIcon3.classList.add('img3')
}

const belowMenuItems = () =>{

    const actualMenu = document.createElement('div')
    actualMenu.classList.add('actualMenu')
    container1.appendChild(actualMenu)

    
    const menuTitle = document.createElement('div')
    actualMenu.appendChild(menuTitle)
    menuTitle.textContent = "Menu"
    menuTitle.classList.add('menuTitle')

    const menuPartOne = document.createElement('div')
    const menuPartTwo = document.createElement('div')
    const menuPartThree = document.createElement('div')

    actualMenu.appendChild(menuPartOne)
    actualMenu.appendChild(menuPartTwo)
    actualMenu.appendChild(menuPartThree)

    menuPartOne.classList.add('menuPartOne')
    menuPartTwo.classList.add('menuPartTwo')
    menuPartThree.classList.add('menuPartThree')
    
    
    const starterTitle = document.createElement('div')
    menuPartOne.appendChild(starterTitle)
    starterTitle.classList.add('subTitle')
    starterTitle.textContent = "Starters"
    
    const mainTitle = document.createElement('div')
    menuPartTwo.appendChild(mainTitle)
    mainTitle.classList.add('subTitle')
    mainTitle.textContent = "Main Course"
    
    const dessertTitle = document.createElement('div')
    menuPartThree.appendChild(dessertTitle)
    dessertTitle.classList.add('subTitle')
    dessertTitle.textContent = "Desserts"
    

    const starterItemOne = document.createElement('div')
    const starterItemTwo = document.createElement('div')
    const starterItemThree = document.createElement('div')

    starterItemOne.classList.add('item')
    starterItemTwo.classList.add('item')
    starterItemThree.classList.add('item')


    menuPartOne.appendChild(starterItemOne)
    menuPartOne.appendChild(starterItemTwo)
    menuPartOne.appendChild(starterItemThree)

    starterItemOne.textContent = "1.Lorem ipsum"
    starterItemTwo.textContent = "2.dolor sit amet"
    starterItemThree.textContent = "3.consectetur adipiscing elit"

    const mainItemOne = document.createElement('div')
    const mainItemTwo = document.createElement('div')
    const mainItemThree = document.createElement('div')

    mainItemOne.classList.add('item')
    mainItemTwo.classList.add('item')
    mainItemThree.classList.add('item')


    menuPartTwo.appendChild(mainItemOne)
    menuPartTwo.appendChild(mainItemTwo)
    menuPartTwo.appendChild(mainItemThree)

    mainItemOne.textContent = "1.Lorem ipsum"
    mainItemTwo.textContent = "2.dolor sit amet"
    mainItemThree.textContent = "3.consectetur adipiscing elit"

    const dessertItemOne = document.createElement('div')
    const dessertItemTwo = document.createElement('div')
    const dessertItemThree = document.createElement('div')

    dessertItemOne.classList.add('item')
    dessertItemTwo.classList.add('item')
    dessertItemThree.classList.add('item')


    menuPartThree.appendChild(dessertItemOne)
    menuPartThree.appendChild(dessertItemTwo)
    menuPartThree.appendChild(dessertItemThree)

    dessertItemOne.textContent = "1.Lorem ipsum"
    dessertItemTwo.textContent = "2.dolor sit amet"
    dessertItemThree.textContent = "3.consectetur adipiscing elit"
}

export {generateMenu,navBar,featuredItems,belowMenuItems}