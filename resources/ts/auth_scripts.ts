const animateCSS = (element: any, animation: string, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;

        let node_element: HTMLElement | null = null;
        if (typeof element == 'string') {
            let get_element: HTMLElement | null = document.querySelector(element)
            if (get_element) {
                node_element = get_element;
            }
        } else {
            node_element = element;
        }
        if (node_element) {
            node_element.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event: Event) {
                event.stopPropagation();
                if (node_element)
                    node_element.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }
            node_element.addEventListener('animationend', handleAnimationEnd, { once: true });
        }
    });
{


    const all_input_items: NodeListOf<HTMLElement> = document.querySelectorAll("div.input-admin");
    const characters_en = "QWERTYUIOPLKJHGFDSAZXCVBNM qwertyuiopasdfghjklzxcvbnm,.?!+-@_";
    const characters_fa = "ضصثقفغعهخحجچپچشسیبلاتنمکگظطزرذدئووئدذرزطظظشسیبلاتنمکگچجحخهعغفقثصضاآ ";
    const numbers = "0987654321۱۲۳۴۵۶۷۸۹۰";
    const map_pattern: [type: string, characters: string][] = [["fa", characters_fa], ["en", characters_en], ["num", numbers]];
    var host = window.location.protocol + "//" + window.location.host + '/';
    var error_save_element: HTMLInputElement;
    var error_save_count: number;
    for (let i = 0; i < all_input_items.length; i++) {
        const element = all_input_items[i];
        let input: HTMLInputElement | null = element.querySelector("input");
        let get_type: string | undefined = input?.dataset.type;
        let empty_value = () => {
            if (input) {
                input.value = ""
                input.focus()
            }
        }
        //   console.log(element.children[0].children[0])
        input?.addEventListener("keypress", () => {
            if (all_input_items[i + 1]) {
                all_input_items[i + 1].querySelector("input")?.focus();
            }
        })
        input?.addEventListener("keyup", () => {
            let type: string | undefined = input.dataset.type;
            let characters = input.value;
            for (let index = 0; index < characters.length; index++) {
                const char = characters[index];
                if (typeof (get_type) == 'string') {
                    let array_character_valid = type_to_array_character(get_type);

                    if (!array_character_valid.includes(char)) {
                        if (error_save_element !== input) {
                            error_save_element = input
                            error_save_count = 1;

                        } else if (input == error_save_element) {
                            error_save_count += 1;
                        }

                        if (error_save_count >= 3) {
                            // push notification
                            //چیز مهمی نیست توجه نکن
                            let div_alert: null | HTMLElement = document.querySelector('div.polipop__closer')
                            if (type && div_alert) {
                                if (div_alert.style.display == 'none') {
                                    if (type.includes('fa')) {
                                        polipop.add({
                                            content: 'لطفا از کلمات فارسی استفاده کنید',
                                            title: 'ارور',
                                            type: 'error',
                                        });
                                    } else if (type.includes('en-num')) {
                                        polipop.add({
                                            content: 'لطفا از کلمات لاتین استفاده کنید',
                                            title: 'ارور',
                                            type: 'error',
                                        });
                                    }



                                }
                            }
                            error_save_count = 0
                            //چیز مهمی نیست توجه نکن
                        }
                        input.value = input.value.replace(char, '');
                    }
                }
            }
        }
        )
    }
    function type_to_array_character(type_multi: string) {
        let types = type_multi.split("-");
        let result = " "
        types.forEach(type => {
            result += type_to_array_character_helper(type);
        });
        return result;
    }
    function type_to_array_character_helper(type: string) {
        let result = "";
        map_pattern.forEach(pattern => {
            if (type == pattern[0]) {

                result = pattern[1]
            }
        });
        return result
    }
}
const tailwind_loader: string = `<div role="status"><svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg><span class="sr-only">Loading...</span></div>`
const image: HTMLImageElement | null = document.querySelector('img.backgrand-image');
function changeImage() {
    if (image) {
        let w = window.outerWidth;
        let h = window.outerHeight;
        if (w > h) {
            image.src = host + 'image/login_image_2.jpg'
        } else {
            image.src = host + 'image/login_image_1.jpg'
        }
    }
}
changeImage()
window.addEventListener('resize', () => { changeImage() })
let password_div: HTMLElement | null = document.querySelector('div.password-div');
let tornoment_div: HTMLElement | null = document.querySelector('h3.tornoment-div');
if (password_div) {
    let button_show: HTMLElement | null = password_div.querySelector('span')
    let input_password: HTMLInputElement | null = password_div.querySelector('input')
    let icon_show: HTMLElement | null | undefined = button_show?.querySelector('i');
    if (button_show && input_password && icon_show) {
        button_show.addEventListener('mouseout', () => {
            if (icon_show.classList.contains('fa-eye')) {
                input_password.type = 'password'
            } else {
                input_password.type = 'text'
            }
        })
        button_show.addEventListener('mouseover', () => {
            if (icon_show.classList.contains('fa-eye')) {
                input_password.type = 'text'
            } else {
                input_password.type = 'password'
            }
        })
        button_show.addEventListener('click', () => {
            icon_show.classList.toggle('fa-eye')
            icon_show.classList.toggle('fa-eye-slash')
        })
    }
}
let button_submit_register: null | HTMLElement = document.querySelector('button.save-register');
let button_forgot_password: null | HTMLElement = document.querySelector('button.forgot-password');
let button_login: null | HTMLElement = document.querySelector('button.login');
const info_div = document.querySelector('div.info-div')
const accept_div = document.querySelector('div.accept-div')
const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
if (button_submit_register && info_div && accept_div) {
    let prev_phone = localStorage.getItem('phone')
    if (prev_phone) {
        inputs[0].value = prev_phone;
    }
    button_submit_register.addEventListener('click', () => {
        if (button_submit_register) {
            if (button_submit_register.children.length === 0) {
                if (button_submit_register)
                    button_submit_register.innerHTML = tailwind_loader
                let error = false;
                if (inputs[0].value.length !== 9 && !error) {
                    polipop.add({
                        content: 'شماره شما باید یازده رقم باشد',
                        title: 'ارور',
                        type: 'error',
                    });
                    error = true;
                } else {
                    localStorage.setItem('phone', inputs[0].value)
                    let show_phone = document.querySelector('b.phone');
                    if (show_phone)
                        show_phone.innerHTML = '09' + inputs[0].value;
                }
                if (!error) {
                    let data: { fild: string, value: string }[] = [];
                    inputs.forEach(input => {
                        data.push({ fild: input.name, value: input.value })
                    });
                    window.axios({
                        method: 'post',
                        url: host + 'verify/send',
                        data: data
                    }).then(function (response: any) {
                        let res: string | { phone: string[], password: string[], name: string[] } = response.data;
                        if (res === 'ok') {
                            window.location.hash = '#';
                            window.location.hash = '#submited';

                            let sec = 180;
                            let interval = setInterval(() => {
                                let min = '0' + Math.floor(sec / 60);
                                let sec_num = sec % 60;
                                let sec_string = sec_num;
                                if (sec_num < 10) {
                                    sec_string = '0' + sec_num.toString();
                                }
                                if (tornoment_div)
                                    tornoment_div.innerHTML = min + ':' + sec_string;
                                sec--;
                                if (sec == 0) {
                                    window.location.href = host + 'login';
                                }
                            }, 1000)


                        } else {
                            if (button_submit_register)
                                button_submit_register.innerHTML = 'تایید'


                            if (typeof (res) !== 'string') {
                                if (res.phone) {
                                    res.phone.forEach((error: string) => {
                                        polipop.add({
                                            content: error,
                                            title: 'ارور',
                                            type: 'error',
                                        });
                                    });
                                }

                            }
                        }
                    }).catch(function (error: Error) {
                    }).then(function () { });







                } else {
                    if (button_submit_register)
                        button_submit_register.innerHTML = 'تایید'
                }
            }
        }
    })
}
if (button_forgot_password && info_div && accept_div) {
    button_forgot_password.addEventListener('click', () => {
        if (button_forgot_password) {
            if (button_forgot_password.children.length === 0) {
                button_forgot_password.innerHTML = tailwind_loader;
                let error = false;

                if (inputs[0].value.length !== 9 && !error) {
                    polipop.add({
                        content: 'شماره را درست وارد کنید',
                        title: 'ارور',
                        type: 'error',
                    });
                    error = true;
                }
                if (!error) {
                    window.axios({
                        method: 'post',
                        url: host + 'verify/password-forgot/' + inputs[0].value,
                    }).then(function (response: any) {
                        let res: string | { phone: string[], password: string[], name: string[] } = response.data;
                        if (res === 'ok') {
                            window.location.hash = '#';
                            window.location.hash = '#submited';
                        } else if (res === 'no') {
                            polipop.add({
                                content: 'این شماره ثبت نشده است لطفا ثبت نام کنید',
                                title: 'ارور',
                                type: 'error',
                            });
                        } else {
                            if (typeof (res) !== 'string') {

                                res.phone.forEach((error: string) => {
                                    console.log(error)
                                    polipop.add({
                                        content: error,
                                        title: 'ارور',
                                        type: 'error',
                                    });
                                });
                                res.password.forEach((error: string) => {
                                    polipop.add({
                                        content: error,
                                        title: 'ارور',
                                        type: 'error',
                                    });
                                });
                                res.name.forEach((error: string) => {
                                    polipop.add({
                                        content: error,
                                        title: 'ارور',
                                        type: 'error',
                                    });
                                });

                            }
                        }
                        if (button_forgot_password)
                            button_forgot_password.innerHTML = 'تایید';
                    }).catch(function (error: Error) {
                    }).then(function () { });
                } else {
                    button_forgot_password.innerHTML = 'تایید';
                }
            }
        }

    })
}

if (button_login) {
    button_login.addEventListener('click', () => {
        if (button_login)
            button_login.innerHTML = tailwind_loader;
    })
}

const function_onchang = () => {
    let hash_string: string = window.location.hash.substring(1);
    if ((button_submit_register || button_forgot_password) && info_div && accept_div) {
        let error = false;
        if (inputs.length !== 1) {

        } else {
            if (inputs[0].value.length !== 9 && !error) {
                polipop.add({
                    content: 'شماره را درست وارد کنید',
                    title: 'ارور',
                    type: 'error',
                });
                error = true;
            }
        }
        if (!error) {
            if (hash_string == 'submited') {
                animateCSS(info_div, 'fadeOutLeft').then((message) => {
                    info_div?.classList.add('hidden')
                })
                accept_div?.classList.remove('hidden');
                animateCSS(accept_div, 'fadeInRight');
            }
            if (!hash_string) {
                animateCSS(info_div, 'fadeInLeft');
                animateCSS(accept_div, 'fadeOutRight').then((message) => {
                    accept_div?.classList.add('hidden')
                    location.reload();
                })
            }
        }
    }
}
// function_onchange();

const inputs_code: NodeListOf<HTMLInputElement> = document.querySelectorAll('input.code')
const input_verifys: NodeListOf<HTMLElement> = document.querySelectorAll('div.input-verify')
for (let i = 0; i < inputs_code.length; i++) {
    const element = inputs_code[i];
    element.addEventListener('keyup', () => {
        if (element.value.length == 1 && !element.value.includes('-')) {
            if (inputs_code[i - 1] && !inputs_code[i - 1].value) {
                inputs_code[i - 1].focus()
            }


            let send = true;
            inputs_code.forEach(input_code => {
                if (!input_code.value) {
                    send = false;
                }
            });



            if (send) {
                let code_user = '';
                inputs_code.forEach(inputs_code => {
                    code_user += inputs_code.value;
                });
                code_user = code_user.split(/(?:)/u).reverse().join("")
                window.axios({
                    method: 'post',
                    url: host + 'verify/chack/' + '09' + inputs[0].value + '/' + code_user,
                }).then(function (response: any) {
                    let res: { mess: string, redirect: string | null } = response.data;
                    if (res.mess == 'ok') {
                        input_verifys.forEach(input_verify => {
                            input_verify.style.borderColor = 'green'
                        })
                        if (res.redirect)
                            window.location.href = res.redirect;
                    } else {
                        input_verifys.forEach(input_verify => {
                            input_verify.style.borderColor = 'red'
                        })
                        if (res.redirect)
                            window.location.href = res.redirect;
                    }
                }).catch(function (error: Error) {
                }).then(function () { });
            }


        } else {
            element.value = '';
        }
    })

    element.addEventListener('focus', () => {
        element.value = ''
    })
    const input_verify = input_verifys[i];
    input_verify.addEventListener('click', () => {
        element.focus();
    })

}


window.addEventListener('hashchange', function_onchang);
const redirect_links: NodeListOf<HTMLElement> = document.querySelectorAll('a.redirect-link');
redirect_links.forEach(redirect_link => {
    if (redirect_link) {
        redirect_link.classList.add('animate__animated', 'animate__headShake', 'animate__infinite');
        redirect_link.style.setProperty('--animate-duration', '2s');
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        let chat_button = document.querySelector("span.cc-157aw");
        let function_edite = () => {
            let alerts = document.querySelectorAll('div.cc-1no03 a[role~=alert]');
            let links = document.querySelectorAll('div.cc-1no03 a[rel~=nofollow]');
            let input_email = document.querySelector('div.cc-1no03 input[name~=message_field_identity-email]');

            alerts.forEach(alert => {
                alert.remove()
            });
            links.forEach(link => {
                link.remove()
            });
            if (input_email) {
                input_email.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove()
            }
            let all_elements: NodeListOf<HTMLElement> = document.querySelectorAll('div.cc-1no03 *');
            all_elements.forEach(element => {
                element.style.cssText += 'font-family:sans !important';
            });
            let option_button = document.querySelector('a.cc-8ve5w.cc-gge6o');
            if (option_button) {
                option_button.remove();
            }
        }
        if (chat_button) {
            chat_button.addEventListener('click', () => {
                let chatbox: null | HTMLElement = document.querySelector('div.cc-1no03');
                if (chatbox) {
                    if (chatbox.dataset.visible === 'false') {
                        let interval = setInterval(() => { function_edite(); }, 500);
                        localStorage.setItem('interval_chat_box', String(interval));
                    } else {
                        let interval = localStorage.getItem('interval_chat_box');
                        if (interval) {
                            clearInterval(parseInt(interval))
                        }
                    }
                }
            })

            let chatbox: null | HTMLElement = document.querySelector('div.cc-1no03');
            if (chatbox) {
                if (chatbox.dataset.visible === 'true') {
                    let interval = setInterval(() => { function_edite(); console.log('ss') }, 500);
                    localStorage.setItem('interval_chat_box', String(interval));
                } else {
                    let interval = localStorage.getItem('interval_chat_box');
                    if (interval) {
                        clearInterval(parseInt(interval))
                    }
                }
            }


        }
    }, 3000)
})