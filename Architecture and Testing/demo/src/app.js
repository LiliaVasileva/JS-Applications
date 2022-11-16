import { checkUserNav } from './auth.js';
import { showHomeView } from './home.js';
import { onLogout } from './auth.js';
import { showCatalogView } from './catalog.js';
import { showLoginView} from './login.js';
import './catalog.js';
import './details.js';
import './login.js';
import { showResisterView } from './register.js';

//  was used before creating function onNavigate
// document.getElementById('home-link').addEventListener('click', showHomeView);
// document.getElementById('catalog-link').addEventListener('click', showCatalogView);
// document.getElementById('login-link').addEventListener('click', showLoginView);
// document.getElementById('logout-link').addEventListener('click', onLogout);

document.querySelector('nav').addEventListener('click', onNavigate);

const views = {
    "home-link": showHomeView,
    "catalog-link": showCatalogView,
    "login-link": showLoginView,
    "logout-link": onLogout,
    "register-link": showResisterView
};

function onNavigate(event){

    if (event.target.tagName == 'A'){
        const id = event.target.id;
        const view = views[id];
        if (typeof view == 'function') {
            document.querySelector('main').replaceChildren();
            view();
        }
    }

}

checkUserNav();

// Start application in home view
showHomeView();