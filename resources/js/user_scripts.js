"use strict";
var host = window.location.protocol + "//" + window.location.host;
var current_url = window.location.href;
var name_business = 'قنادی ناب';
if (current_url.split('?')) {
    current_url = current_url.split('?')[0];
}
else if (current_url.split('#')) {
    current_url = current_url.split('#')[0];
}
if (!localStorage.getItem('carts_data')) {
    localStorage.setItem('carts_data', JSON.stringify([]));
}
function format_item_bar_product(data) {
    let image = typeof (data.img) == 'string' ? data.img : data.img[0];
    let image_2 = typeof (data.img) == 'string' ? null : data.img;
    return `
    <div  class="animate__animated relative group animate__zoomIn sm:w-96 w-full mb-4 similar_item cursor-pointer p-1  sm:p-2 flex bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
   ${data.off ? "<div class='absolute z-20 sm:top-2 sm:right-2 top-1 right-1'><span class='text-white  flex items-center flex-row-reverse bg-red-600 px-1 sm:px-2 rounded-3xl'>" + '<span class="text-xs sm:text-sm font-bold flex  items-center mr-0.5">%</span>' + '<span class="flex text-sm sm:text-base items-center mt-0 sm:mt-[1.5px] font-bold">' + data.off + '</span>' + "</span></div>" : ''}
   
    <div class=" w-[90px] sm:w-[110px] flex-shrink-0 h-24  sm:h-28 flex justify-center items-center  relative">
                                <a href="${data.url}">
                                    <div class="  justify-center h-full w-full flex   items-center">
                                        <span
                                            class=" size-[80px] sm:size-[100px] rounded-lg overflow-hidden border-[1px] border-white">
                                            <img data-src='${JSON.stringify(image_2)}'  class=" h-full w-full  object-cover "
                                                src="${'/storage/' + image}" alt="">
                                        </span>
                                    </div>
                                </a>
                            </div>
        <div class=" flex flex-col w-full justify-between pr-1 items-center">
        <div class="flex justify-between items-center w-full"> 
        <span class=" text-base flex items-center sm:text-xl text  w-full font-bold ">
        ${data.name}
        </span>
        
        <span>
    <button data-id="${data.id}"
        class="group add-to-cart translate-x-1 translate-y-1 sm:translate-x-0 sm:translate-y-0 bg-primary-200 sm:text-2xl text-lg size-10 sm:size-12 flex justify-center items-center text-white hover:font-bold border-2 border-transparent group rounded-xl ">
        <i class="fa hover:font-bold fa-cart-plus" aria-hidden="true"></i>
    </button>
    <div class=" justify-center items-center ">
    </div>
</span>
        </div>
        <div class="flex justify-between items-center w-full"> 
        <span class=" text-xs mb-2 mr-2 flex items-center sm:text-base text  w-full font-bold ">
           ${data.off ?
        '<div class="flex flex-col justify-center items-center"> <div class="line-through h-4 sm:h-5 inline-block opacity-50 scale-75"><span class="line-through opacity-50 scale-75">' + price(data.price) + '</span></div>' +
            '<p>' + price(data.price - (data.price / 100) * parseInt(data.off)) + '</p></div>'
        :
            '<span class="mt-2">' + price(data.price) + '</span>'}
        </span>
        
        <span>
    
</span>


        </div>
            
        </div>
    </div>
    
`;
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
const button_dark_mode = document.querySelector('div.button-dark-mode');
const logos_website = document.querySelectorAll('img.logo');
if (button_dark_mode && logos_website) {
    button_dark_mode.addEventListener('click', () => {
        animateCSS(button_dark_mode, 'headShake');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('color-theme', 'light');
            logos_website.forEach((logo_website) => {
                logo_website.src = logo_website.src.replace('Logo%20dark', 'Logo%20light');
            });
        }
        else {
            localStorage.setItem('color-theme', 'dark');
            logos_website.forEach((logo_website) => {
                logo_website.src = logo_website.src.replace('Logo%20light', 'Logo%20dark');
            });
        }
        document.documentElement.classList.toggle('dark');
    });
}
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    if (logos_website) {
        logos_website.forEach((logo_website) => {
            logo_website.src = logo_website.src.replace('Logo%20light', 'Logo%20dark');
        });
    }
}
else {
    document.documentElement.classList.remove('dark');
    if (logos_website) {
        logos_website.forEach((logo_website) => {
            logo_website.src = logo_website.src.replace('Logo%20dark', 'Logo%20light');
        });
    }
}
const DURATION = {
    SHORT: 2000,
    LONG: 4000
};
function snackbar(sb) {
    var _a, _b;
    if (document.getElementById('snackbar-container') == null) {
        const sb_container = document.createElement("div");
        if (sb.action) {
            if (sb.action.link !== undefined) {
                sb_container.onclick = () => {
                    window.location.href = host + '/cart/';
                };
            }
        }
        if (sb.addClass) {
            sb_container.classList.add(sb.addClass);
        }
        sb_container.setAttribute("id", "snackbar-container");
        (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(sb_container);
    }
    const snackbar_el = document.createElement("div");
    snackbar_el.classList.add("snackbar");
    switch (sb.type) {
        case 'error':
            snackbar_el.classList.add("sb-error");
            break;
        case 'primary':
            snackbar_el.classList.add("sb-primary");
            break;
        default:
            snackbar_el.classList.add("sb-primary");
            break;
    }
    if (sb.text) {
        const snackbar_text = document.createElement("div");
        snackbar_text.classList.add("snackbar-text");
        snackbar_text.innerHTML = sb.text;
        snackbar_el.appendChild(snackbar_text);
    }
    if (sb.action !== undefined) {
        const snackbar_action = document.createElement("div");
        snackbar_action.classList.add("snackbar-action");
        const snackbar_action_text = document.createElement("a");
        snackbar_action_text.innerHTML = sb.action.text;
        if (sb.action.color !== undefined) {
            snackbar_action_text.style.color = sb.action.color;
        }
        if (sb.action.link !== undefined) {
            // snackbar_action_text.setAttribute("href", sb.action.link);
        }
        if (sb.action.function !== undefined) {
            snackbar_action_text.addEventListener("click", function () {
                const snackbarFunction = new Function(sb.action.function);
                snackbarFunction();
            });
        }
        snackbar_action.appendChild(snackbar_action_text);
        snackbar_el.appendChild(snackbar_action);
    }
    (_b = document.getElementById('snackbar-container')) === null || _b === void 0 ? void 0 : _b.appendChild(snackbar_el);
    if (sb.persistent === undefined || sb.persistent !== true) {
        const duration = (sb.duration === undefined || sb.duration === "short") ? DURATION.SHORT : (sb.duration === "long" ? DURATION.LONG : DURATION.SHORT);
        setTimeout(() => {
            snackbar_el.classList.add("sb-out");
        }, duration);
        setTimeout(() => {
            snackbar_el.remove();
        }, duration + 450);
    }
}
//focusin out
// animateCSS('.search-box', 'bounce');
const count_shoping_cart_sapn = document.querySelector('span.count-shoping-cart');
const reload_count_cart_shop = () => {
    let data_local = localStorage.getItem('carts_data');
    if (data_local && count_shoping_cart_sapn) {
        count_shoping_cart_sapn.innerHTML = JSON.parse(data_local).length;
    }
};
const tailwind_loader = '<span class="loader"></span>';
const remove_icon_cart = `<i class="fa fa-times font-bold scale-125" aria-hidden="true"></i>`;
function reload_button_add_cart_events() {
    reload_count_cart_shop();
    const buttons_add_carts = document.querySelectorAll('button.add-to-cart');
    buttons_add_carts.forEach(button_add_cart => {
        let button = button_add_cart;
        let icon = button_add_cart.querySelector('i');
        if (icon) {
            let data_local = localStorage.getItem('carts_data');
            let founded = false;
            if (data_local) {
                let items = JSON.parse(data_local);
                items.forEach(item => {
                    if (item.id == button.dataset.id) {
                        founded = true;
                    }
                });
            }
            if (!founded) {
                button.innerHTML = `<i class="fa font-bold fa-cart-plus" aria-hidden="true"></i>`;
            }
            else {
                button.innerHTML = remove_icon_cart;
            }
            button.addEventListener('click', () => {
                if (button.children[0].classList.contains('fa')) {
                    button.innerHTML = tailwind_loader;
                    window.axios({
                        method: 'get',
                        url: host + '/add-remove-cart/' + button.dataset.id,
                    }).then(function (response) {
                        let data = response.data;
                        let data_local = localStorage.getItem('carts_data');
                        let data_result = [];
                        let founded = false;
                        if (data_local) {
                            let items = JSON.parse(data_local);
                            items.forEach(item => {
                                if (item.id == button.dataset.id) {
                                    founded = true;
                                }
                            });
                        }
                        window.axios({
                            method: 'get',
                            url: host + '/api/product/id/' + button.dataset.id,
                        }).then(function (response) {
                            let name = response.data[0].name;
                            if (!founded) {
                                window.location.hash = 'cart';
                                if (data_local) {
                                    let items = JSON.parse(data_local);
                                    let res = items.push({ count: 1, id: button.dataset.id });
                                    localStorage.setItem('carts_data', JSON.stringify(items));
                                }
                                let buttons_add_carts = document.querySelectorAll('button.add-to-cart');
                                buttons_add_carts.forEach(butto_add_cart => {
                                    if (butto_add_cart.dataset.id === button.dataset.id)
                                        butto_add_cart.innerHTML = remove_icon_cart;
                                });
                                reload_count_cart_shop();
                            }
                            else {
                                snackbar({
                                    text: "",
                                    type: "primary",
                                    persistent: false,
                                    addClass: 'en',
                                    duration: 'long',
                                    action: {
                                        text: `${name} از سبد خرید <b style='font-weight:bolder' class='text-red-600'>حذف شد</b> برای مشاهده اینجا کلیک کنید`,
                                        color: "rgb(255,255,255)",
                                        link: host + '/cart'
                                    }
                                });
                                if (data_local) {
                                    let items = JSON.parse(data_local);
                                    let items_res = [];
                                    items.forEach(item => {
                                        if (item.id !== button.dataset.id) {
                                            items_res.push(item);
                                        }
                                    });
                                    localStorage.setItem('carts_data', JSON.stringify(items_res));
                                }
                                buttons_add_carts.forEach(butto_add_cart => {
                                    if (butto_add_cart.dataset.id === button.dataset.id)
                                        butto_add_cart.innerHTML = `<i class="fa font-bold fa-cart-plus" aria-hidden="true"></i>`;
                                });
                                reload_count_cart_shop();
                            }
                        }).catch(function (error) {
                        }).then(function () { });
                    }).catch(function (error) {
                    }).then(function () { });
                }
            });
        }
    });
}
window.reload_button_add_cart_events = () => {
    reload_button_add_cart_events();
};
function price(price) {
    price = Math.ceil(price / 1000) * 1000;
    const type = ['', ' هزار ', ' میلیون ', ' میلیارد ', ' تیلیارد '];
    const priceLen = String(price).length;
    const select3_3 = Math.ceil(priceLen / 3);
    const resultArray = [];
    for (let i = 0; i < select3_3; i++) {
        const num = String(price).split('').reverse().join('').substring(i * 3, (i + 1) * 3);
        if (parseInt(num)) {
            resultArray.push('<span style="white-space: nowrap;" class="price"><span class="sm:text-lg top-2 text-base">' + parseInt(num.split('').reverse().join('')) + '</span>' + type[i] + '</span>');
        }
    }
    let result = resultArray.reverse().join("<span class=''> و </span>") + '<span>تومان<span/>';
    return result.trim() === '<span>تومان<span/>' ? '0 تومان' : result.trim();
}
const margeDataSartShop = () => {
    window.axios({
        method: 'get',
        url: host + '/shop-carts-user',
    }).then(function (response) {
        let local_data = localStorage.getItem('carts_data');
        if (response.data && local_data) {
            let data = response.data;
            let items = JSON.parse(local_data);
            data.forEach(item_db => {
                let isset = false;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item_db.product_id == item.id) {
                        isset = true;
                    }
                }
                if (!isset)
                    items.push({ id: item_db.product_id, count: 1 });
            });
            localStorage.setItem('carts_data', JSON.stringify(items));
            window.axios({
                method: 'post',
                url: host + '/merge-data-cart',
                data: { data: items }
            }).then(function (response) {
            }).catch(function (error) {
            }).then(function () { });
        }
        reload_button_add_cart_events();
        reload_count_cart_shop();
    }).catch(() => {
        reload_button_add_cart_events();
        reload_count_cart_shop();
    }).then(() => {
        reload_button_add_cart_events();
        reload_count_cart_shop();
    });
};
margeDataSartShop();
const box_search = document.querySelector('div.search-box');
const lable_search = document.querySelector('div.label-text-search');
const search_bar = document.querySelector('div.search-bar');
const button_search_open = document.querySelector('.button-search-open');
const close_button_search = document.querySelector('div.search-bar div.close-search');
let input_search = box_search === null || box_search === void 0 ? void 0 : box_search.querySelector('input');
let similer_text = box_search === null || box_search === void 0 ? void 0 : box_search.querySelector('div.similer-text');
let parent_box = box_search; //loading_search
let similar_items_box = parent_box === null || parent_box === void 0 ? void 0 : parent_box.querySelector('div.similer-box');
let loading_search = parent_box === null || parent_box === void 0 ? void 0 : parent_box.querySelector('div.loading-search');
let similer_text_inner = parent_box === null || parent_box === void 0 ? void 0 : parent_box.querySelector('span.similer-text-inner');
let similar_items = document.querySelector('div.search-box div.similar-items');
let open_or_close = () => {
    if ((input_search === null || input_search === void 0 ? void 0 : input_search.value.length) && (similar_items_box === null || similar_items_box === void 0 ? void 0 : similar_items_box.classList.contains('hidden'))) {
        similar_items_box === null || similar_items_box === void 0 ? void 0 : similar_items_box.classList.remove('hidden');
        animateCSS(similar_items_box, 'fadeInUp');
    }
    else if (!(input_search === null || input_search === void 0 ? void 0 : input_search.value) && !(similar_items_box === null || similar_items_box === void 0 ? void 0 : similar_items_box.classList.contains('hidden'))) {
        animateCSS(similar_items_box, 'fadeOutDown').then((message) => {
            similar_items_box === null || similar_items_box === void 0 ? void 0 : similar_items_box.classList.add('hidden');
        });
    }
};
let function_search_key = () => {
    open_or_close();
    loading_search === null || loading_search === void 0 ? void 0 : loading_search.classList.remove('hidden');
    if (similar_items)
        similar_items.innerHTML = '';
    if ((input_search === null || input_search === void 0 ? void 0 : input_search.value) && input_search.value.length > 3) {
        let url = host + '/api/sentence/' + input_search.value;
        window.axios({
            method: 'get',
            url: url,
        }).then(function (response) {
            if (!((input_search === null || input_search === void 0 ? void 0 : input_search.value.trim()) == response.data)) {
                similer_text === null || similer_text === void 0 ? void 0 : similer_text.classList.remove('hidden');
                if (similer_text_inner) {
                    similer_text_inner.innerHTML = response.data;
                }
            }
            else {
                similer_text === null || similer_text === void 0 ? void 0 : similer_text.classList.add('hidden');
            }
        }).catch(function (error) {
        }).then(function () { });
    }
    if (input_search === null || input_search === void 0 ? void 0 : input_search.value) {
        window.axios({
            method: 'get',
            url: host + '/api/search/1/5/' + input_search.value,
        }).then(function (response) {
            let data = response.data;
            if (similar_items) {
                if (response.data.length) {
                    similar_items.classList.remove('hidden');
                    loading_search === null || loading_search === void 0 ? void 0 : loading_search.classList.add('hidden');
                    similar_items.innerHTML = '';
                    data.forEach(item => {
                        if (similar_items)
                            similar_items.innerHTML += format_item_bar_product(item);
                    });
                    reload_button_add_cart_events();
                }
                else {
                    similar_items.innerHTML = '<p class="text text-lg w-full">هیچ آیتمی پیدا نشد</p>';
                    loading_search === null || loading_search === void 0 ? void 0 : loading_search.classList.add('hidden');
                }
            }
        }).catch(function (error) {
        }).then(function () { });
    }
};
input_search === null || input_search === void 0 ? void 0 : input_search.addEventListener('keyup', function_search_key);
similer_text === null || similer_text === void 0 ? void 0 : similer_text.addEventListener('click', () => {
    if (input_search && similer_text_inner) {
        input_search.value = similer_text_inner === null || similer_text_inner === void 0 ? void 0 : similer_text_inner.innerHTML.trim();
    }
    function_search_key();
});
input_search === null || input_search === void 0 ? void 0 : input_search.addEventListener('click', () => {
    animateCSS(input_search, 'headShake');
    animateCSS(lable_search, 'bounceOutLeft').then((message) => {
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.add('opacity-0');
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.remove('h-40');
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.add('h-0');
    });
});
const close_search = (event) => {
    if (event.target == search_bar) {
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.remove('opacity-0');
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.add('h-40');
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.remove('h-0');
        animateCSS(similar_items_box, 'fadeOutDown').then((message) => {
            similar_items_box === null || similar_items_box === void 0 ? void 0 : similar_items_box.classList.add('hidden');
        });
    }
};
search_bar === null || search_bar === void 0 ? void 0 : search_bar.addEventListener('click', close_search);
const open_search_bar = () => {
    if (button_search_open && search_bar) {
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.setAttribute('class', 'h-40 p-5 flex items-center label-text-search');
        animateCSS(button_search_open, 'headShake');
        animateCSS(search_bar, 'fadeIn');
        search_bar.classList.remove('hidden');
    }
};
const close_search_bar = () => {
    if (button_search_open && search_bar) {
        animateCSS(close_button_search, 'headShake');
        animateCSS(search_bar, 'fadeOut').then((message) => {
            search_bar.classList.add('hidden');
        });
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.remove('opacity-0');
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.add('h-40');
        lable_search === null || lable_search === void 0 ? void 0 : lable_search.classList.remove('h-0');
        animateCSS(similar_items_box, 'fadeOutDown').then((message) => {
            similar_items_box === null || similar_items_box === void 0 ? void 0 : similar_items_box.classList.add('hidden');
        });
    }
};
const buttons_search = document.querySelectorAll('div.search-box .fa-search');
const loader_search = () => {
    buttons_search.forEach(button_search => {
        button_search.classList.remove('.fa', '.fa-search');
        button_search.classList.add('fa', 'fa-spinner', 'fa-pulse', 'fa-3x', 'fa-fw');
    });
};
buttons_search.forEach(button_search => {
    button_search.addEventListener('click', () => {
        var _a;
        loader_search();
        let input = (_a = button_search.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('input');
        if (input) {
            window.location.href = host + '/search/1/' + input.value;
        }
    });
});
const search_forms = document.querySelectorAll('form.search_forms');
search_forms.forEach(search_form => {
    search_form.addEventListener('submit', (e) => {
        e.preventDefault();
        loader_search();
        let form_input = search_form.querySelector('input');
        if (form_input) {
            window.location.href = host + '/search/1/' + form_input.value;
        }
    });
});
const carts = document.querySelectorAll('div.cart-shoping');
const all_price_cart_results = document.querySelectorAll('span.price-all');
const price_results = document.querySelectorAll('span.result-price');
const show_price_sends = document.querySelectorAll('div.show-price-send ');
const show_free_sends = document.querySelectorAll('div.show-free-send ');
const box_buttons_pay = document.querySelector('div.box-buttons');
const cart_box = document.querySelector('div.cart-shoping-main');
// const all_data
const renderCartLocal = () => {
    let data = localStorage.getItem('carts_data');
    if (cart_box)
        cart_box.innerHTML = '';
    if (data) {
        let items = JSON.parse(data);
        if (!items.length) {
            const cart_box = document.querySelector('div.cart-shoping-main');
            if (cart_box) {
                cart_box.innerHTML += `
        <h1 class="text text-center sm:mt-32 text-lg ">
            سبد خرید شما خالی است
        </h1>
        <style>
            .dark a.link-home {
                text-shadow: 2px 2px 1px blue, -2px -2px 1px green
            }

            a.link-home {
                text-shadow: 2px 2px 1px blue, -2px -2px 1px red
            }
        </style>
        <a href="/show-all" class="text link-home block text-center mt-16 text-lg">
            برای اضافه کردن کالا به سبد خرید کلیک کنید
        </a>`;
            }
        }
        if (cart_box) {
            window.axios({
                method: 'post',
                url: host + '/translate-data-cart',
                data: { data: JSON.parse(data) }
            }).then(function (response) {
                if (response.data) {
                    let data = response.data;
                    data.forEach(item => {
                        cart_box.innerHTML += `
                        <div class="flex cart-shoping relative  mb-4 "  data-price="${item.off ? item.price - (item.price / 100) * item.off : item.price}" data-id="${item.id}" id="${item.id}" data-type="${item.type}">
                 <button class=" remove text-white absolute left-0 -top-2 bg-red-600 cursor-pointer flex justify-center items-center size-7 text-lg rounded-lg">
                        <i class="fa fa-times" aria-hidden="true"></i>
                     </button>
                        <div class="w-20" >
                  <img class="size-20 rounded-lg" src="${'/storage/' + JSON.parse(item.img)[0]}" alt="">
                </div>
                <div style="width: calc(100% - 88px)" class="flex flex-col justify-around pr-2" >
                  <p class="text flex justify-between">
                     <a href="${'/product/' + item.id}" class="text-sm select-none font-bold">${item.name}</a>
                   
                  </p>
                  <p class="text text-sm">
                  <p class="scale-75 select-none mb-1 w-full flex-nowrap text-nowrap text">
                                ${price(item.off ? item.price - (item.price / 100) * item.off : item.price)}   
                  </p>            
                  </p>
                  <p class="text text-sm  ">
                    <div class="flex  items-center">
                        <button type="button" 
                            class="text-white   plus bg-blue-700 text-lg size-6 flex justify-center items-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <span class="text flex w-16 justify-center items-center mr-2">
                            <span data-type="${item.type}"
                                class="number select-none text-base  font-bold flex items-center">
                                  ${item.count}
                            </span>
                            <span
                             data-type="${item.type}"   class="mr-1 mb-1 select-none text-sm font-bold">
                               ${item.type == 'numerical' ? 'عدد' : 'کیلو'}
                            </span>
                        </span>
                        <button type="button"
                            class="text-white nege mr-2 bg-blue-700  flex justify-center items-center text-lg size-6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        </div>
                  </p>

                </div>
          </div>
                        `;
                    });
                    if (carts.length) {
                        let data = localStorage.getItem('carts_data');
                        let data_response = response.data;
                        if (data) {
                            let items = JSON.parse(data);
                            items.forEach(item => {
                                carts.forEach(cart => {
                                    if (cart.dataset.id == String(item.id)) {
                                        let numbers = cart.querySelectorAll('span.number');
                                        numbers.forEach(number => {
                                            number.innerHTML = String(item.count);
                                        });
                                    }
                                });
                            });
                        }
                    }
                    let dat = localStorage.getItem('carts_data');
                    if (dat) {
                        let data_response = data;
                        let item_res = [];
                        let items = JSON.parse(dat);
                        data_response.forEach(item_response => {
                            items.forEach(item => {
                                if (item_response.id == item.id) {
                                    item_res.push(item);
                                }
                            });
                        });
                        localStorage.setItem('carts_data', JSON.stringify(item_res));
                    }
                }
                load_evens_carts();
            });
        }
    }
};
function load_evens_carts() {
    const carts = document.querySelectorAll('div.cart-shoping');
    carts.forEach(cart => {
        let plus_buttons = cart.querySelectorAll('button.plus');
        let type = cart.dataset.type;
        let nega_buttons = cart.querySelectorAll('button.nege');
        let numbers = cart.querySelectorAll('span.number');
        let remove_buttons = cart.querySelectorAll('button.remove');
        const save_data = () => {
            let data = [];
            const carts = document.querySelectorAll('div.cart-shoping');
            carts.forEach(cart => {
                let number = cart.querySelector('span.number');
                if (number) {
                    data.push({ id: cart.dataset.id, count: parseFloat(number.innerHTML) });
                }
                localStorage.setItem('carts_data', JSON.stringify(data));
            });
        };
        const functionPlus = () => {
            numbers.forEach(number => {
                let speed = type == "numerical" ? 1 : 0.5;
                let num = parseFloat(number.innerHTML);
                number.innerHTML = String(num + speed);
            });
            save_data();
        };
        plus_buttons.forEach(plus_button => {
            plus_button.addEventListener('click', () => { functionPlus(); });
        });
        const functionNega = () => {
            numbers.forEach(number => {
                let speed = type == "numerical" ? 1 : 0.5;
                let num = parseFloat(number.innerHTML);
                if (num - speed < 0) {
                    number.innerHTML = '0';
                }
                else {
                    number.innerHTML = String(num - speed);
                }
            });
            save_data();
        };
        nega_buttons.forEach(nega_button => {
            nega_button.addEventListener('click', () => { functionNega(); });
        });
        remove_buttons.forEach(remove_button => {
            remove_button.addEventListener('click', () => {
                animateCSS(cart, 'fadeOutLeft').then((message) => {
                    cart.classList.add('hidden');
                });
                let data = localStorage.getItem('carts_data');
                let result_data = [];
                if (data) {
                    let items = JSON.parse(data);
                    items.forEach(item => {
                        if (item.id !== cart.dataset.id) {
                            result_data.push(item);
                        }
                    });
                }
                console.log(result_data);
                localStorage.setItem('carts_data', JSON.stringify(result_data));
                window.axios({
                    method: 'delete',
                    url: host + '/remove-cart/' + cart.dataset.id,
                }).then(function (response) {
                }).catch(function (error) {
                }).then(function () { });
                reload_count_cart_shop();
                reload_button_add_cart_events();
            });
        });
    });
}
// renderCartLocal()
const button_bar = document.querySelector('button.button-bar');
const div_bar = document.querySelector('div.div-bar');
const div_navbar_item = document.querySelector('div.div-navbar-items');
const div_bar_item = div_bar === null || div_bar === void 0 ? void 0 : div_bar.querySelector('div.div-bar-item');
const text_address_bar = div_bar === null || div_bar === void 0 ? void 0 : div_bar.querySelector('p.text-address-bar');
function change_address(links) {
    if (text_address_bar) {
        text_address_bar.innerHTML = '';
        let tags_a = [];
        links.forEach(link => {
            tags_a.push(`<a class=" hover:text-blue-500" href="${current_url.split("#")[0] + link.link}">${link.text}</a>`);
        });
        text_address_bar.innerHTML = tags_a.join(' / ');
    }
}
function format_item_navbar(data) {
    let left_or_right = '';
    if (!data.icon.includes('info')) {
        left_or_right = '-scale-x-100';
    }
    return `
    <div>
    <a class=" animate__animated  animate__bounceInRight group mx-2  text-black dark:text-white 
    text-md sm:text-lg hover:after:w-full after:transition-all after:w-0 after:content-['']
     after:rounded-md after:right-1 after:bg-primary-200 after:h-1 relative after:absolute after:-bottom-1 group-hover:font-bold
                 items-center inline-flex hover:font-bold"
                    href="${data.link}">
                    <i style="transition: 0s !important"
                        class=" ${data.icon} group-hover:font-bold ${left_or_right} fa mx-2 text-lg sm:text-xl"
                        aria-hidden="true"></i>
                    <span
                        class=" group-hover:font-bold ">${data.text}</span>
                </a>
    </div>

    `;
}
function format_item_bar(data) {
    return `
     <a href='${data.url} ' class="sm:w-96 group w-full mb-4">
    <div  class="animate__animated  animate__zoomIn similar_item cursor-pointer p-2 flex bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class=" w-[120px] flex-shrink-0 flex justify-center items-center  relative">
            <img class="group-hover:rotate-180" src="${host + '/image/similar_item.png'}" alt="">
            <div class="  absolute top-0 right-0 h-full w-full flex justify-center items-center">
                <span class="size-[80px] rounded-full overflow-hidden border-[1px] border-white">
                    <img class=" h-full w-full main object-cover " src="${host + '/storage/' + data.img}" alt="">
                </span>
            </div>
        </div>
        <div class="p-2 pt-6 flex flex-col justify-between">
            <p class=" text-2xl text  w-full font-bold ">
            ${data.name}
            </p>
            <p class="text mt-8 mr-4 flex items-center opacity-60">
                  <span class="mt-1 font-bold text-xl"> ${data.count} </span> <span class="mr-2 mt-0.5"> محصول </span>
            </p>
            <br>
        </div>
    </div>
    </a>
`;
}
const open_bar = () => {
    if (div_bar === null || div_bar === void 0 ? void 0 : div_bar.classList.contains('hidden')) {
        div_bar === null || div_bar === void 0 ? void 0 : div_bar.classList.remove('hidden');
        animateCSS(div_bar, 'fadeIn');
    }
};
const close_bar = () => {
    if (!(div_bar === null || div_bar === void 0 ? void 0 : div_bar.classList.contains('hidden'))) {
        animateCSS(div_bar, 'fadeOut').then((message) => {
            div_bar === null || div_bar === void 0 ? void 0 : div_bar.classList.add('hidden');
        });
    }
};
const div_nav_cart = document.querySelector('div.div-nav-cart');
const div_slide_nav = document.querySelector('div.slide-nav');
var controll_click = 0;
if (div_nav_cart) {
    div_nav_cart.addEventListener('click', (event) => {
        if (event.target == div_nav_cart) {
            if (!controll_click) {
                window.history.back();
                controll_click = 1;
            }
            setTimeout(() => {
                controll_click = 0;
            }, 3000);
        }
    });
}
const open_cart_bar = () => {
    renderCartLocal();
    div_nav_cart === null || div_nav_cart === void 0 ? void 0 : div_nav_cart.classList.remove('hidden');
    setTimeout(() => {
        div_slide_nav === null || div_slide_nav === void 0 ? void 0 : div_slide_nav.classList.add('right-0');
        div_slide_nav === null || div_slide_nav === void 0 ? void 0 : div_slide_nav.classList.remove('-right-72');
    }, 100);
};
const close_cart_bar = () => {
    div_slide_nav === null || div_slide_nav === void 0 ? void 0 : div_slide_nav.classList.add('-right-72');
    div_slide_nav === null || div_slide_nav === void 0 ? void 0 : div_slide_nav.classList.remove('right-0');
    setTimeout(() => {
        div_nav_cart === null || div_nav_cart === void 0 ? void 0 : div_nav_cart.classList.add('hidden');
    }, 1000);
};
const function_onchange = () => {
    let hash_string = window.location.hash.substring(1);
    if (hash_string.includes('category')) {
        document.documentElement.classList.add('overflow-hidden');
    }
    else {
        document.documentElement.classList.remove('overflow-hidden');
    }
    if (div_bar && button_bar && hash_string.includes('category')) {
        if (text_address_bar)
            text_address_bar.innerHTML = `<a class=" hover:text-blue-600" href="#category">دسته بندی ها</a>`;
        if (div_navbar_item)
            div_navbar_item.innerHTML = '';
        if (div_bar_item)
            div_bar_item.innerHTML = '';
        open_bar();
        let hash_splite = hash_string.split('_');
        if (hash_string == 'category') {
            window.axios({
                method: 'get',
                url: host + '/api/all-category',
            }).then(function (response) {
                let categories = response.data;
                change_address([{ text: 'دسته بندی ها', link: '#category' }]);
                categories.forEach(category => {
                    if (div_bar_item) {
                        let category_result = category;
                        category_result.url = '#category_' + category.id;
                        div_bar_item.innerHTML += format_item_bar(category);
                    }
                });
            }).catch(function (error) {
            }).then(function () { });
        }
        else {
            window.axios({
                method: 'get',
                url: host + '/api/product/category/' + hash_splite[1],
            }).then(function (response) {
                let products = response.data;
                products.forEach(product => {
                    if (div_bar_item) {
                        let product_result = product;
                        product_result.url = '/product/' + product.id;
                        product_result.img = JSON.parse(product.img);
                        product_result.id = product.id;
                        product_result.price = product.price;
                        product_result.off = product.off;
                        div_bar_item.innerHTML += format_item_bar_product(product_result);
                    }
                });
                reloadImageSwich();
                reload_button_add_cart_events();
                window.axios({
                    method: 'get',
                    url: host + '/api/category/id/' + hash_splite[1],
                }).then(function (response) {
                    change_address([{ text: 'دسته بندی ها', link: '#category' }, { link: '#' + hash_string, text: response.data[0].name }]);
                }).catch(function (error) {
                }).then(function () { });
            }).catch(function (error) {
            }).then(function () { });
        }
    }
    if (parseInt(hash_string) > 0) {
        let element_scroll = document.getElementById('T' + hash_string);
        if (element_scroll) {
            let doc = document.documentElement;
            let offset_top_el = element_scroll.offsetTop - 150;
            doc.scrollTop = offset_top_el;
        }
    }
    if (hash_string == 'bar') {
        if (text_address_bar)
            text_address_bar.innerHTML = 'منو';
        if (div_bar_item)
            div_bar_item.innerHTML = '';
        if (div_navbar_item)
            div_navbar_item.innerHTML = '';
        open_bar();
        let items = [];
        let items_navbar = document.querySelectorAll('div#item_navbar a');
        items_navbar.forEach(item_navbar => {
            let item = { link: '', text: '', icon: '' };
            item.link = item_navbar.href;
            item.icon = item_navbar.children[0].classList[0];
            item.text = item_navbar.children[1].innerHTML;
            items.push(item);
        });
        items.forEach(item => {
            if (div_navbar_item) {
                div_navbar_item.innerHTML += format_item_navbar(item);
            }
        });
    }
    if (hash_string == 'search') {
        open_search_bar();
    }
    else if (!(search_bar === null || search_bar === void 0 ? void 0 : search_bar.classList.contains('hidden'))) {
        close_search_bar();
    }
    if (hash_string == 'cart') {
        open_cart_bar();
    }
    else if (!(div_nav_cart === null || div_nav_cart === void 0 ? void 0 : div_nav_cart.classList.contains('hidden'))) {
        close_cart_bar();
    }
    if (!(div_bar && button_bar && hash_string.includes('category')) && !(hash_string == 'bar')) {
        close_bar();
    }
};
function_onchange();
window.addEventListener('hashchange', function_onchange);
const input_copys = document.querySelectorAll("input.textLink");
const copyButtons = document.querySelectorAll(".copy");
for (let i = 0; i < copyButtons.length; i++) {
    const copyButton = copyButtons[i];
    const input_copy = input_copys[i];
    const copyText = (e) => {
        // window.getSelection().selectAllChildren(textElement);
        if (input_copy)
            input_copy.select(); //select input value
        document.execCommand("copy");
        e.currentTarget.setAttribute("tooltip", "Copied!");
    };
    const resetTooltip = (e) => {
        e.currentTarget.setAttribute("tooltip", "Copy to clipboard");
    };
    if (copyButton) {
        copyButton.addEventListener("click", (e) => copyText(e));
        copyButton.addEventListener("mouseover", (e) => resetTooltip(e));
    }
}
const boxs_share = document.querySelectorAll('ul.share-box');
// ---------- Share Applications ----------
const applications = [
    { name: 'telegram', format: 'https://t.me/share/url?url={url}&text={text}', fa_name: 'تلگرام' },
    { name: 'facebook', format: 'https://www.facebook.com/share.php?u={url}&t={text}', fa_name: 'فیسبوک' },
    { name: 'eitaa', format: 'https://www.eitaa.com/share/url?url={text}', fa_name: 'ایتا' },
    { name: 'whatsapp', format: 'https://wa.me/?text={url}', fa_name: 'واتساپ' },
    { name: 'x', format: 'https://www.twitter.com/intent/tweet?url={url}&text={text}', fa_name: 'ایکس (توییتر سابق)' },
];
// ---------- Share Applications ----------
boxs_share.forEach(box_share => {
    applications.forEach(application => {
        if (box_share)
            box_share.innerHTML += `
                   <li class="mx-1" >
                            <a target="_blank" class="group " title = "${'اشتراک گزاری در' + ' ' + application.fa_name}"
                            href="${application.format.replace("{url}", current_url).replace("{text}", name_business + " " + document.title)}">
                                <img class=" group-hover:scale-125  group-hover:rotate-[360deg] size-10 rounded-full object-cover overflow-hiddens "
                                 src="${host + '/image/app/' + application.name + '.jpg'}">
                            </a>
                        </li>       
    `;
    });
});
const show_count_comments = document.querySelector('b.show-count-comments');
var count_comment = 0;
function ReloadComments() {
    if (show_count_comments) {
        window.axios({
            method: 'post',
            url: host + '/get-comments/' + window.page_id,
        }).then(function (response) {
            let comments = response.data;
            let accepted_comment = 0;
            comments.forEach(comment => {
                accepted_comment++;
            });
            if (show_count_comments) {
                show_count_comments.innerHTML = '(' + accepted_comment + ')';
                count_comment = accepted_comment;
            }
        }).catch(function (error) {
        }).then(function () { });
    }
}
window.onload = () => {
    ReloadComments();
};
const textarea_comment = document.querySelector('div.comment textarea');
const input_comment = document.querySelector('div.comment input');
const button_comment = document.querySelector('div.comment button');
if (button_comment && textarea_comment && input_comment) {
    button_comment.addEventListener('click', () => {
        if (button_comment.innerHTML == 'ارسال') {
            button_comment.innerHTML = `<i class="fa fa-spinner text-[25px] fa-pulse fa-3x fa-fw"></i>`;
            let text = textarea_comment.value;
            let name = (input_comment.value) ? input_comment.value : 'ناشناس';
            if (input_comment.value)
                localStorage.setItem('name', input_comment.value);
            window.axios.post('/user/send-comment', {
                text: text,
                name: name,
                page_id: window.page_id
            })
                .then(function (response) {
                alert(response.data);
                textarea_comment.value = '';
                button_comment.innerHTML = `ارسال`;
            })
                .catch(function (error) {
            });
        }
    });
    let name = localStorage.getItem('name');
    if (name) {
        input_comment.value = name;
    }
}
const button_show_comments = document.querySelector('button.comment-show');
const comment_box = document.querySelector('section.comment-box');
const text_button_comment_hidden = 'پنهان کردن کامنت ها';
let text_button_comment_now = '';
if (button_show_comments && comment_box && show_count_comments) {
    button_show_comments.addEventListener('click', () => {
        if (count_comment) {
            if (!text_button_comment_now) {
                text_button_comment_now = button_show_comments.innerHTML;
            }
            if (button_show_comments.innerHTML == text_button_comment_hidden) {
                comment_box.innerHTML = '';
                button_show_comments.innerHTML = text_button_comment_now;
            }
            else {
                button_show_comments.innerHTML = `<i class="fa fa-spinner text-[25px] fa-pulse fa-3x fa-fw"></i>`;
                window.axios({
                    method: 'post',
                    url: host + '/get-comments/' + window.page_id,
                }).then(function (response) {
                    let comments = response.data;
                    comments.forEach(comment => {
                        comment_box.innerHTML += `
                        <div class="w-full animate__animated  animate__bounceInRight mb-3 mx-auto px-4">
                            <article class="p-6 w-full text-base bg-white rounded-lg  dark:bg-gray-800">
                                <footer class="flex justify-between items-center mb-2">
                                    <div class="flex items-center">
                                        <p
                                            class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                            <img class="mr-2 w-6 h-6 ml-2 object-cover rounded-full"
                                                src="${comment.img}"
                                                alt="Michael Gough">${comment.name}
                                        </p>
                                        <p class="text-sm text-gray-600 mr-2 dark:text-gray-200">
                                        <span>${comment.time.day}</span> 
                                        <span>${comment.time.month}</span> 
                                        <span>${comment.time.year}</span> 
                                        <span>${comment.time.clock}</span> 
                                        </p>
                                    </div>
    
                                </footer>
                                <p class="text-gray-500 w-full dark:text-gray-400">
                                ${comment.text}
                                </p>

                                 ${comment.replay ?
                            '<div class="bg-gray-600 mt-3 p-3 rounded-lg text" >'
                                +
                                    '<p class="text mb-3">پاسخ ادمین :</p>'
                                +
                                    comment.replay
                                +
                                    '</div>'
                            : ''}
                            </article>
                        </div>`;
                    });
                    button_show_comments.innerHTML = text_button_comment_hidden;
                }).catch(function (error) {
                }).then(function () { });
            }
        }
    });
}
window.addEventListener('load', () => {
    setTimeout(() => {
        let chat_button = document.querySelector("span.cc-157aw");
        let function_edite = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            let alerts = document.querySelectorAll('div.cc-1no03 a[role~=alert]');
            let links = document.querySelectorAll('div.cc-1no03 a[rel~=nofollow]');
            let input_email = document.querySelector('div.cc-1no03 input[name~=message_field_identity-email]');
            alerts.forEach(alert => {
                alert.remove();
            });
            links.forEach(link => {
                link.remove();
            });
            if (input_email) {
                (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = input_email.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.parentNode) === null || _h === void 0 ? void 0 : _h.remove();
            }
            let all_elements = document.querySelectorAll('div.cc-1no03 *');
            all_elements.forEach(element => {
                element.style.cssText += 'font-family:sans !important';
            });
            let option_button = document.querySelector('a.cc-8ve5w.cc-gge6o');
            if (option_button) {
                option_button.remove();
            }
        };
        let all_elements = document.querySelectorAll('div.cc-1no03 *');
        if (chat_button) {
            let chatbox = document.querySelector('div.cc-1no03');
            if (chatbox) {
                if (chatbox.dataset.visible === 'true') {
                    let interval = setInterval(() => { function_edite(); }, 100);
                    localStorage.setItem('interval_chat_box', String(interval));
                }
                else {
                    let interval = localStorage.getItem('interval_chat_box');
                    if (interval) {
                        clearInterval(parseInt(interval));
                    }
                    setTimeout(() => {
                        let interva = setInterval(() => { function_edite(); }, 100);
                        localStorage.setItem('interval_chat_box', String(interva));
                    });
                }
            }
        }
    }, 3000);
});
var blog = document.querySelector('div.blog');
const nav_blog = document.querySelector('div.nav-blog');
const div_titles_blog = document.querySelector('div.titles');
const product_div = document.querySelector('div.product-div');
if (product_div) {
    blog = product_div;
}
if (blog && nav_blog) {
    const set_hight = () => {
        let blog_main = document.querySelector('div.blog-main');
        if (window.innerWidth > 768) {
            if (blog_main)
                nav_blog.style.height = blog_main.offsetHeight - 100 + 'px';
        }
        else {
            if (blog_main)
                nav_blog.style.height = 'auto';
        }
    };
    set_hight();
    setTimeout(() => {
        setInterval(() => {
            set_hight();
        }, 100);
    }, 5000);
    const headers_tag = document.querySelectorAll('div.blog h2');
    for (let i = 0; i < headers_tag.length; i++) {
        let element = headers_tag[i];
        let span = element.querySelector('span');
        let text = '';
        if (span) {
            text = span.innerHTML.trim();
        }
        else {
            text = element.innerHTML.trim();
        }
        element.id = 'T' + String(i + 1);
        if (div_titles_blog)
            div_titles_blog.innerHTML += `    
<a class=" block mt-4 group" href="${'#' + String(i + 1)}">
                        <div class="flex  items-center">
                            <div class="loader1"></div>
                            <span
                                class="text group-hover:after:w-full after:transition-all group-hover:font-bold after:w-0 after:content-[''] after:rounded-md after:right-0 after:bg-primary-200 after:h-1 relative after:absolute after:-bottom-1  text-lg mr-3">
                                ${text}
                            </span>
                        </div>
</a>
`;
    }
}
window.addEventListener('load', () => {
    var _a;
    (_a = document.querySelector('div.leaflet-bottom.leaflet-right')) === null || _a === void 0 ? void 0 : _a.remove();
});
const reloadImageSwich = () => {
    let similars_item = document.querySelectorAll('div.similar_item');
    similars_item.forEach(similar_item => {
        let imgs = similar_item.querySelectorAll('img');
        let img = imgs[0];
        if (img) {
            similar_item.addEventListener('mouseover', () => {
                let data_img = img.dataset.src;
                if (data_img) {
                    let images = JSON.parse(data_img);
                    if (images) {
                        if (images[1])
                            img.src = host + '/storage/' + images[1];
                    }
                }
            });
            similar_item.addEventListener('mouseout', () => {
                let data_img = img.dataset.src;
                if (data_img) {
                    let images = JSON.parse(data_img);
                    if (images) {
                        img.src = host + '/storage/' + images[0];
                    }
                }
            });
        }
    });
};
reloadImageSwich();
