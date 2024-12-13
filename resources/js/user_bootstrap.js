import 'animate.css';
var host = window.location.protocol + "//" + window.location.host;
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import AOS from 'aos';
import 'ckeditor5/ckeditor5.css';
import '../../node_modules/aos/dist/aos.css'

// console.log(document.querySelector('.document-editor__editable'));

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        let node = document.querySelector(element);
        if (!(typeof element == 'string')) {
            node = element;
        }
        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }
        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });    

window.AOS = AOS;
AOS.init();
