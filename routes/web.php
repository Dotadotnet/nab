<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\BlockUserController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ConfigController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ShopCartController;
use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/product/{id}', [ProductController::class, 'shortLink'])->name('shortLink');
Route::get('/product/{category}/{name}', [ProductController::class, 'userShow'])->name('userShow');
Route::get('/blog/{id}', [BlogController::class, 'shortLink'])->name('shortLinkBlog');
Route::get('/blog/{id}/{name}', [BlogController::class, 'userShow'])->name('userShowBlog');
Route::post('/user/send-comment', [CommentController::class, 'add_comment_user'])->name('add_comment_user');
Route::get('/search/{pagintion}/{input}', [SearchController::class, 'view']);
Route::post('/translate-data-cart', [ShopCartController::class, 'translateData']);
Route::get('/call', [HomeController::class, 'call']);
Route::get('/', [HomeController::class, 'index']);
Route::get('/send-sms', [HomeController::class, 'sendSms']);
Route::get('/show-all', [HomeController::class, 'showAll']);
Route::get('/about', [BlogController::class, 'about']);
Route::prefix('panel')->group(function () {
    Route::middleware('admin_auth')->group(function () {
        Route::post('/comment/{id}/replay/{value}', [CommentController::class, 'replay']);
        Route::post('/delete/block', [BlockUserController::class, 'deletePhone']);
        Route::get('/selected-products', [ProductController::class, 'selectedProductsView']);
        Route::resource('admin', AdminController::class)->names('admin');
        Route::get('/order/{id}', [OrderController::class, 'getDataOrder']);
        Route::delete('/order/{id}', [OrderController::class, 'deleteOrder']);
        Route::get('/order/{id}/{item}/{value}', [OrderController::class, 'orderChange']);
        Route::get('/config/{key}', [ConfigController::class, 'getConfig']);
        Route::get('/dashbord', [ConfigController::class, 'showDashbord'])->name('dashbord');
        Route::post('/config/{key}/{value}', [ConfigController::class, 'updateConfig']);
        Route::get('/order-all-post', [OrderController::class, 'orderAllPost'])->name('order_all_post');
        Route::get('/order-all-map', [OrderController::class, 'orderAllMap'])->name('order_all_map');
        Route::get('/order-all-courier', [OrderController::class, 'orderAllCourier'])->name('order_all_courier');
        Route::get('/order-all', [OrderController::class, 'orderAll'])->name('order_all');
        Route::resource('category', CategoryController::class)->names('category');
        Route::resource('product', ProductController::class)->names('product');
        Route::resource('event', EventController::class)->names('event');
        Route::resource('comment', CommentController::class)->names('comment');
        Route::resource('block', BlockUserController::class)->names('block');
        Route::resource('blog', BlogController::class)->names('blog');
        Route::post('/upload/file/ckeditor', [BlogController::class, 'insertImage'])->name('insert_image');
        Route::resource('user', UserController::class)->names('user');
    });
});

Route::get('/event-all', [EventController::class, "getAll"]);
Route::get('/forgot-password', function () {
    return view('user.forgot_password');
})->name('forgot_password');
Route::get('/login', function () {
    return view('user.register');
})->name('login');
Route::post('/verify/send', [UserAuthController::class, 'save_phone'])->name('send_sms');
Route::get('/selected-items-api', [ProductController::class, 'selectedItemsApi']);
Route::get('/verify/{phone}/{code}', [UserAuthController::class, 'link_verify'])->name('verify_link');
Route::post('/verify-chack/{phone}', [UserAuthController::class, 'chack_verify'])->name('chack_verify');
Route::get('/admin_login', [AdminAuthController::class, 'getLogin'])->name('admin_login');
Route::post('/admin_login', [AdminAuthController::class, 'postLogin'])->name('adminLoginPost'); // admin_login
Route::get('/admin_logout', [AdminAuthController::class, 'adminLogout'])->name('admin_logout');
Route::post('/login-user', [UserAuthController::class, 'login']);
Route::post('/verify/password-forgot/{phone}', [UserAuthController::class, 'send_link_password'])->name('send_sms_password');
Route::post('/get-comments/{id}', [CommentController::class, 'getComment']);
Route::get('/cart', [ShopCartController::class, 'show'])->name('cart_show');
Route::middleware('user_auth')->group(function () {
    Route::get("/inventory-increase", function () {
        return view('panel.inventory_increase');
    });

    Route::post('/merge-data-cart', [ShopCartController::class, 'mergeDataCart']);
    Route::post('/reject-order/{id}', [OrderController::class, 'rejectOrder']);
    Route::get('/shop-carts-user', [ShopCartController::class, 'ShopCartsUser']);
    Route::post('/cancel-order/{id}', [OrderController::class, 'cancelOrder']);
    Route::get('/profile', function () {
        return view('panel.profile');
    })->name('profile_user');
    Route::post('/inventory-increase', [ProfileController::class, 'inventoryIncrease']);
    Route::post('/change-profile-image', [ProfileController::class, 'changeProfileImage']);
    Route::post('/change-info-user', [ProfileController::class, 'changeInfoUse']);
    Route::get('/logout', [ProfileController::class, 'logout'])->name('logout');
    Route::get('/islogin', [UserAuthController::class, 'isLogin'])->name('islogin');
    Route::get('/analyze-data-cart/{data}', [ShopCartController::class, 'analyzeData'])->name('analyze_data_cart');
    Route::post('/set-location', [OrderController::class, 'set_location']);
    Route::post('/pay-atm', [OrderController::class, 'pay_atm']);
    Route::get('/order-set-location/{id}', [OrderController::class, 'order_set_location'])->name('order_set_location');
    Route::get('/orders', [OrderController::class, 'show']);
    Route::post('/change-plate/{id}/{plate}', [OrderController::class, 'change_plate']);
    Route::post('/change-unit/{id}/{unit}', [OrderController::class, 'change_unit']);
    Route::post('/change-location/{id}/{lat}/{lng}', [OrderController::class, 'change_location']);
    Route::post('/change-postal-code/{id}/{code}', [OrderController::class, 'change_postal_code']);
    Route::post('/send-by-courier', [OrderController::class, 'send_by_courier']);
    Route::post('/send-by-post', [OrderController::class, 'send_by_post']);
    Route::post('/add-invoice/{id}', [OrderController::class, 'add_invoice']);
    Route::delete('/remove-invoice/{id}', [OrderController::class, 'remove_invoice']);
    Route::get('/get-wallet', [ProfileController::class, 'getWallet']);
    Route::get('/get-user-info', [UserAuthController::class, 'get_user']);
});
Route::get('/add-remove-cart/{id}', [ShopCartController::class, 'add_remove_cart'])->name('add_remove_cart');
Route::delete('/remove-cart/{id}', [ShopCartController::class, 'remove_cart'])->name('remove_cart');
Route::get('/is-added-to-cart/{id}', [ShopCartController::class, 'is_added'])->name('is_added');
Route::get('/data_server', function () {
    return response($_SERVER);
});
