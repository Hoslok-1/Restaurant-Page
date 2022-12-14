import { generateContent,navBar,textInitial,footer,container,home,menu, content,aboutUs } from './initialpage'
import { container1,footer as footerMenu,content as contentMenu, generateMenu,navBar as navBarMenu,home as homeMenu, featuredItems,belowMenuItems,aboutUs as aboutUsMenu } from './menupage';
import { generateAboutUs, aboutUsText,aboutUsNavbar, home as homeAboutUs, menu as menuAboutUs,content as contentAboutUs, footer as footerAboutUs,mainText } from './aboutuspage';
import './style.css';




generateContent();
navBar();
textInitial();
footer();

navBarMenu();
featuredItems();
belowMenuItems();
footerMenu();

aboutUsNavbar();
mainText();
aboutUsText();
footerAboutUs();

function closeTab()
{  
    content.remove()
    container.remove()
    container1.remove()
    
}

function closeMenu()
{
    contentMenu.remove()
}

function closeAboutUs()
{
    contentAboutUs.remove()
}

function loadHome()
{
    generateContent();
}

function loadMenu()
{
    generateMenu();
}

function loadAboutUs()
{
    generateAboutUs();
}


homeAboutUs.addEventListener('click',()=>{closeAboutUs();loadHome()})
homeMenu.addEventListener('click',()=>{closeMenu();loadHome()})
menuAboutUs.addEventListener('click',()=>{closeAboutUs();loadMenu()})
menu.addEventListener('click',()=>{closeTab();loadMenu()})
aboutUs.addEventListener('click',()=>{closeTab();generateAboutUs()})
aboutUsMenu.addEventListener('click',()=>{closeMenu();loadAboutUs()})
