import 'animate.css';
var host = window.location.protocol + "//" + window.location.host;
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

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
    
    var polipop_error = new Polipop('mypolipop', {
        layout: 'popups',
        pool: 4,
        life: 3000,
      });
      if (errors) {
        if (errors == 'successful') {
          polipop_error.add({
            content: 'پروسه با موفقیت انجام شد',
            title: 'تبریک',
            type: 'success',
          });
        } else if (Array.isArray(errors)) {
          errors.forEach(error => {
            polipop_error.add({
              content: error,
              title: 'مقادیر وارد شده صحیح نمی باشد !!!',
              type: 'error',
            });
          });
        }
      }