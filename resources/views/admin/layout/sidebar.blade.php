<aside class="sidebar">
    <div class="sidebar-start">
        <div class="sidebar-head">
            <a href="/" class="logo-wrapper" title="Home">
                <span class="sr-only">Home</span>
                <span class="icon logo" aria-hidden="true"></span>
                <div class="logo-text">
                    <span class="logo-title font-lg mr-5 relative font-parastoo">ناب <span class=" text-xs absolute -top-2 -right-2">قنادی</span></span>
                    <span class="logo-subtitle mr-5 font-parastoo font-bold">کنترل پنل</span>
                </div>

            </a>
            <button class="sidebar-toggle transparent-btn" title="Menu" type="button">
                <span class="sr-only">Toggle menu</span>
                <span class="icon menu-toggle" aria-hidden="true"></span>
            </button>
        </div>
        <div class="sidebar-body">
            <ul class="sidebar-body-menu">
                <li>
                    <a href="/panel/dashbord"><span class="icon home" aria-hidden="true"></span>داشبورد</a>
                </li>
                <li>
                    <a class="show-cat-btn" href="##">
                        <span class="icon  category " aria-hidden="true"></span>محصولات
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                        <li>
                            <a href="{{ route('product.create') }}">اضافه کردن</a>
                        </li>
                        <li>
                            <a href="{{ route('product.index') }}">حذف و تغییرات</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="show-cat-btn" href="##">
                        <span class="icon folder" aria-hidden="true"></span>دسته بندی ها
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                        <li>
                            <a href="/panel/category/create">اضافه کردن</a>
                        </li>
                        <li>
                            <a href="/panel/category">تغییر و حذف</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="show-cat-btn" href="##">
                      <span class="icon document" aria-hidden="true"></span>بلاگ
                      <span class="category__btn transparent-btn" title="Open list">
                        <span class="sr-only">Open </span>
                        <span class="icon arrow-down" aria-hidden="true"></span>
                      </span>
                    </a>
                    <ul class="cat-sub-menu">
                      <li>
                        <a href="{{ route('blog.create') }}">اضافه کردن</a>
                      </li>
                      <li>
                        <a href="{{ route('blog.index') }}">حذف و تغییرات</a>
                      </li>
                    </ul>
                  </li>
                <li>
                    
            <a class="show-cat-btn" href="##">
              <span class="icon image" aria-hidden="true"></span>رویداد
              <span class="category__btn transparent-btn" title="Open list">
                <span class="sr-only">Open list</span>
                <span class="icon arrow-down" aria-hidden="true"></span>
              </span>
            </a>
            <ul class="cat-sub-menu">
              <li>
                <a href="{{route('event.index')}}">حذف و تغییرات</a>
              </li>
              <li>
                <a href="{{route('event.create')}}">اضافه کردن</a>
              </li>
            </ul>
          </li>
                <li>
                    <a href="/panel/comment">
                        <span class="icon message" aria-hidden="true"></span>
                        کامنت ها
                    </a>
                    <span class="msg-counter comment-show"> {{ count(App\Models\Comment::where(['status' => 0])->get())  }} </span>
                </li>
              
                <li>
                    <a class="show-cat-btn" href="##">
                        <span class="send-product-icon translate-y-1 mx-1" aria-hidden="true"></span> سفارشات
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                        <li>
                            <a href="{{ route('order_all') }}">تمام سفارشات</a>
                        </li>
                        <li>
                            <a href="{{ route('order_all_post') }}">تحویل سفارشات پستی</a>
                        </li>
                        <li>
                            <a href="{{ route('order_all_courier') }}">تحویل سفارشات پیک</a>
                        </li>
                        <li>
                            <a href="{{ route('order_all_map') }}">سفارشات روی نقشه</a>
                        </li>
                        {{-- <li>
                            <a href="{{ route('block.index') }}">تحویل</a>
                        </li> --}}
                    </ul>
                </li>
            </ul>
            <span class="system-menu__title">اشخاص</span>
            <ul class="sidebar-body-menu">
                {{-- <li>
            <a href="appearance.html"><span class="icon edit" aria-hidden="true"></span>Appearance</a>
          </li> --}}
                {{-- <li>
            <a class="show-cat-btn" href="##">
              <span class="icon category" aria-hidden="true"></span>Extentions
              <span class="category__btn transparent-btn" title="Open list">
                <span class="sr-only">Open list</span>
                <span class="icon arrow-down" aria-hidden="true"></span>
              </span>
            </a>
            <ul class="cat-sub-menu">
              <li>
                <a href="extention-01.html">Extentions-01</a>
              </li>
              <li>
                <a href="extention-02.html">Extentions-02</a>
              </li>
            </ul>
          </li> --}}
                <li>
                    <a class="show-cat-btn" href="##">
                        <span class="icon user-3" aria-hidden="true"></span>کاربران
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                        <li>
                            <a href="{{ route('user.index') }}">کاربران فعال</a>
                        </li>
                        <li>
                            <a href="{{ route('block.index') }}">کاربران مسدود شده</a>
                        </li>
                    </ul>
                </li>
                @if(Auth::guard('admin')->user()->is_super_admin)
                <li>
                    <a class="show-cat-btn" href="##">
                        <span class="icon admin-icon" aria-hidden="true"></span>ادمین ها
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                        <li>
                            <a href="/panel/admin/create">اضافه کردن</a>
                        </li>
                        <li>
                            <a href="/panel/admin">حذف و تغییر</a>
                        </li>
                    </ul>
                </li>
                @endif
                {{-- <li>
            <a href="##"><span class="icon setting" aria-hidden="true"></span>Settings</a>
          </li> --}}
            </ul>
        </div>
    </div>
    <div class="sidebar-footer">
        <a href="##" class="sidebar-user">
            <span class="sidebar-user-img">
                <picture>
                    <img src="{{ Storage::url(Auth::guard('admin')->user()->img) }}" alt="User name">
                </picture>
            </span>
            <div class="sidebar-user-info">
                <span class="sidebar-user__title mr-2">
                  {{ Auth::guard('admin')->user()->name . ' ' . Auth::guard('admin')->user()->last_name }}
                </span>
                <span class="sidebar-user__subtitle mr-2 mt-1 font-parastoo">
                  {{ Auth::guard('admin')->user()->is_super_admin ? 'سوپر ادمین' : 'ادمین'}}
                </span>
            </div>
        </a>
    </div>
</aside>
