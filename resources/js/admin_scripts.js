"use strict";
{
    const all_input_items = document.querySelectorAll("div.input-admin");
    const characters_en = "QWERTYUIOPLKJHGFDSAZXCVBNM qwertyuiopasdfghjklzxcvbnm,.?!+-@_:/";
    const characters_fa = "ضصثقفغعهخحجچپچشسیبلاتنمکگظطزرذدئو./.وئدذرزطظظشسیبلاتنمکگچجحخهعغفقثصضا آ ؟!";
    const numbers = "0987654321 ۱۲۳۴۵۶۷۸۹۰ +";
    const map_pattern = [["fa", characters_fa], ["en", characters_en], ["num", numbers]];
    var host = window.location.protocol + "//" + window.location.host;
    var error_save_element;
    var error_save_count;
    for (let i = 0; i < all_input_items.length; i++) {
        const element = all_input_items[i];
        let input = element.querySelector("input");
        let get_type = input === null || input === void 0 ? void 0 : input.dataset.type;
        let empty_value = () => {
            if (input) {
                input.value = "";
                input.focus();
            }
        };
        //   console.log(element.children[0].children[0])
        element.children[0].children[0].addEventListener("click", empty_value);
        input === null || input === void 0 ? void 0 : input.addEventListener("keypress", () => {
            var _a;
            if (all_input_items[i + 1]) {
                (_a = all_input_items[i + 1].querySelector("input")) === null || _a === void 0 ? void 0 : _a.focus();
            }
        });
        input === null || input === void 0 ? void 0 : input.addEventListener("focusin", () => {
            if (element) {
                element.classList.add("ring");
            }
        });
        input === null || input === void 0 ? void 0 : input.addEventListener("focusout", () => {
            element.classList.remove("ring");
        });
        input === null || input === void 0 ? void 0 : input.addEventListener("keyup", () => {
            let characters = input.value;
            for (let index = 0; index < characters.length; index++) {
                const char = characters[index];
                if (typeof (get_type) == 'string') {
                    let array_character_valid = type_to_array_character(get_type);
                    if (!array_character_valid.includes(char)) {
                        if (error_save_element !== input) {
                            error_save_element = input;
                            error_save_count = 1;
                        }
                        else if (input == error_save_element) {
                            error_save_count += 1;
                        }
                        if (error_save_count >= 3) {
                            // push notification
                            //چیز مهمی نیست توجه نکن
                            polipop.add({
                                content: 'لطفا مقادیر درست وارد کنید',
                                title: 'ارور',
                                type: 'error',
                            });
                            error_save_count = 0;
                            //چیز مهمی نیست توجه نکن
                        }
                        input.value = input.value.replace(char, '');
                    }
                }
            }
        });
    }
    function type_to_array_character(type_multi) {
        let types = type_multi.split("-");
        let result = " ";
        types.forEach(type => {
            result += type_to_array_character_helper(type);
        });
        return result;
    }
    function type_to_array_character_helper(type) {
        let result = "";
        map_pattern.forEach(pattern => {
            if (type == pattern[0]) {
                result = pattern[1];
            }
        });
        return result;
    }
}
const animateCSS = (element, animation, prefix = 'animate__') => 
// We create a Promise and return it
new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    let node_element = null;
    if (typeof element == 'string') {
        let get_element = document.querySelector(element);
        if (get_element) {
            node_element = get_element;
        }
    }
    else {
        node_element = element;
    }
    if (node_element) {
        node_element.classList.add(`${prefix}animated`, animationName);
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            if (node_element)
                node_element.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }
        node_element.addEventListener('animationend', handleAnimationEnd, { once: true });
    }
});
const forms = document.querySelectorAll('form');
const submits_input = document.querySelectorAll("button.submit");
const Ckeditor_text = document.querySelector('div.document-editor__editable');
submits_input.forEach(submit_input => {
    submit_input.addEventListener('click', () => {
        submit_input.innerHTML = '<i class="fa fa-cog fa-spin fa-2x fa-fw mr-2"></i>',
            forms.forEach(form => {
                if (form.querySelector("button.submit") == submit_input) {
                    form.submit();
                }
            });
    });
});
const select = document.querySelector('select[name="category"]');
if (select) {
    select.addEventListener('focusin', () => {
        var _a, _b;
        (_a = select.parentNode) === null || _a === void 0 ? void 0 : _a.children[0].children[0].classList.add('rotate-180');
        (_b = select.parentNode) === null || _b === void 0 ? void 0 : _b.children[0].children[0].classList.add('-translate-y-1');
    });
    select.addEventListener('focusout', () => {
        var _a, _b;
        (_a = select.parentNode) === null || _a === void 0 ? void 0 : _a.children[0].children[0].classList.remove('rotate-180');
        (_b = select.parentNode) === null || _b === void 0 ? void 0 : _b.children[0].children[0].classList.remove('-translate-y-1');
    });
}
const show_comment = document.querySelector('span.comment-show');
const buttons_show_order = document.querySelectorAll('button.show-order-info');
const div_show_order = document.querySelector('div.show-order-info');
const div_button_close = document.querySelector('div.show-order-info button.close');
buttons_show_order.forEach(button_show_order => {
    button_show_order.addEventListener('click', () => {
        let id = button_show_order.dataset.id;
        window.openOrder(id);
    });
});
if (div_show_order) {
    div_show_order.addEventListener('dblclick', (event) => {
        if (event.target == div_show_order) {
            animateCSS(div_show_order, 'fadeOut').then((message) => {
                div_show_order.classList.add('hidden');
            });
        }
    });
    if (div_button_close) {
        div_button_close.addEventListener('click', () => {
            animateCSS(div_show_order, 'fadeOut').then((message) => {
                div_show_order.classList.add('hidden');
            });
        });
    }
}
window.openOrder = function openOrder(id) {
    let loader_div = document.querySelector('div.show-order-info div.loader-div');
    let main_div = document.querySelector('div.show-order-info div.all');
    let name = document.querySelector('div.show-order-info b.name');
    let phone = document.querySelector('div.show-order-info b.phone');
    let plate = document.querySelector('div.show-order-info b.plate');
    let unit = document.querySelector('div.show-order-info b.unit');
    let postal_code = document.querySelector('div.show-order-info b.postal-code');
    let teble_div = document.querySelector('div.show-order-info div.table-order');
    let link_loc = document.querySelector('div.show-order-info a.location');
    if (div_show_order && loader_div && main_div) {
        loader_div.classList.remove('hidden');
        main_div.classList.add('hidden');
        div_show_order.classList.remove('hidden');
        animateCSS(div_show_order, 'fadeIn');
        window.axios({
            method: 'get',
            url: host + '/panel/order/' + id,
        }).then(function (response) {
            var _a, _b;
            let data = response.data;
            if (teble_div)
                teble_div.innerHTML = '';
            if (name) {
                name.innerHTML = data.name;
            }
            if (phone) {
                phone.innerHTML = data.phone;
            }
            if (plate) {
                plate.innerHTML = data.plate;
            }
            if (unit) {
                unit.innerHTML = data.unit;
            }
            if (data.postal_code) {
                if (postal_code) {
                    postal_code.innerHTML = data.postal_code;
                }
                if (link_loc && postal_code) {
                    link_loc.classList.add('hidden');
                    (_a = postal_code.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
                }
            }
            else {
                if (postal_code && link_loc) {
                    (_b = postal_code.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
                    link_loc.classList.remove('hidden');
                }
                if (link_loc) {
                    link_loc.href = `https://www.google.com/maps/dir/${data.lat},${data.lng}/${data.lat},${data.lng}/@${data.lat},${data.lng},14z`;
                }
            }
            let data_items = data.data;
            data_items.forEach(item => {
                if (teble_div) {
                    teble_div.innerHTML += `
                    <div class="mt-2 select-none flex justify-between items-center bg-gray-300 dark:bg-gray-700 rounded-full p-3">
                        <img class=" select-none rounded-full size-20"
                            src="/storage/${JSON.parse(item.img)[0]}"
                            alt="">
                        <span class="text select-none  text-xl">${item.name}</span>
                        <span class="text select-none  text-xl ml-5">${item.type} ${item.count}</span>
                    </div>
                    `;
                }
            });
            main_div.classList.remove('hidden');
            loader_div.classList.add('hidden');
        }).catch(function (error) {
            alert('مشکلی پیش آمده است');
        }).then(function () { });
    }
};
window.addEventListener('load', () => {
    var _a;
    (_a = document.querySelector('div.leaflet-bottom.leaflet-right')) === null || _a === void 0 ? void 0 : _a.remove();
});
