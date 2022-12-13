import { generateContent,navBar,textInitial,footer,container,home,menu } from './initialpage'
import { container1, generateMenu,navBar as navBarMenu,home as homeMenu, featuredItems,belowMenuItems } from './menupage';
import './style.css';



generateContent();
navBar();
textInitial();
footer();


function closeTab()
{
    container.remove()
    container1.remove()
}

function loadHome()
{
    generateContent();
}

function loadMenu()
{
    generateMenu();
    navBarMenu();
    featuredItems();
    belowMenuItems();
}


homeMenu.addEventListener('click',()=>{closeTab();loadHome()})
home.addEventListener('click',()=>{closeTab();loadHome()})
menu.addEventListener('click',()=>{closeTab();loadMenu()})