<nav class="main-nav--bg">
    <div class="container main-nav">

        <div class="main-nav-end mt-1">
            <button class=" mt-1 sidebar-toggle transparent-btn" title="Menu" type="button">
                <span class="sr-only">Toggle menu</span>
                <span class="icon menu-toggle--gray" aria-hidden="true"></span>
            </button>
            <button class="mt-1 theme-switcher gray-circle-btn" type="button" title="Switch theme">
                <span class="sr-only">Switch theme</span>
                <i class="sun-icon" data-feather="sun" aria-hidden="true"></i>
                <i class="moon-icon" data-feather="moon" aria-hidden="true"></i>
            </button>
       
            <div style="margin:0px 10px;" class="nav-user-wrapper">
                <button href="##" class="nav-user-btn dropdown-btn" title="My profile" type="button">
                    <span class="sr-only">My profile</span>
                    <span class="nav-user-img mt-[10px]">
                        <picture>
                            <img src="{{ Storage::url(Auth::guard('admin')->user()->img) }}" alt="User name">
                        </picture>
                    </span>
                </button>
                <ul style="border: 2px solid #0061f7 ;" class="users-item-dropdown nav-user-dropdown dropdown">
                    <li><a href="{{ route('admin.show',['admin' => Auth::guard('admin')->user()->id]) }}">
                            <i data-feather="user" aria-hidden="true"></i>
                            <span>پروفایل</span>
                        </a></li>
                    <li><a class="danger" href="{{ route('admin_logout') }}">
                            <i data-feather="log-out" aria-hidden="true"></i>
                            <span>خروج</span>
                        </a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
