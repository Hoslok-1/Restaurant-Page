import { generateContent,navBar,textInitial,footer,menu,container,home } from './initialpage'
import { container1, generateMenu,navBar as navBarMenu } from './menupage';
import './style.css';

generateContent();
navBar();
textInitial();
footer();
generateMenu();

function closeTab()
{
    container.style.display = 'none'
    container1.style.display = 'none'
}

function openHome()
{
    container.style.display = 'block'
}

function openMenu()
{
    container.style.display = 'block'
    console.log("This work?")
}

menu.addEventListener('click', ()=>{closeTab();openMenu();})
home.addEventListener('click', () =>{closeTab();openHome();})
