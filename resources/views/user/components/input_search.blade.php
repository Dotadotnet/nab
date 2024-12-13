<div class="search-box relative flex justify-center z-[100] flex-col">
    <form class="search_forms" action="/ds/dsadsa" >
    <div class=" relative">
            <input autocomplete="off" spellcheck="false"
            class=" focus:shadow-[0px_0px_5px_0.5px_rgba(0,0,0,0.2)] 
            dark:shadow-light-opacity-30
            dark:placeholder:text-white placeholder:text-black bg-light-30 dark:bg-dark-30 border-[1px] border-primary-200  rounded-lg
            w-full py-2 pl-12 px-3  leading-tight outline-none text"
            id="username" type="search" placeholder="سرچ کنید ...">
            <i class="fa fa-search absolute top-[3px] text-black dark:text-white left-3 text-2xl font-bold"
            aria-hidden="true"></i>
        </div>
    </form>

    <div
        class="similer-box hidden w-full absolute border p-1 sm:p-2 top-[60px] left-0 bg-light-30 dark:bg-dark-30 
    border-primary-200   rounded-lg 
    ">
        <div class="similer-box pr-3">
            <div class="similer-text hidden">
                <p class="text   text-sm p-2">
                    آیا منظور شما این است ؟؟
                </p>
                <p
                    class=" text cursor-pointer bg-gradient-to-l text-white from-primary-200 rounded-lg  relative p-2 hover:font-bold">
                    <span class="mr-2 similer-text-inner">
                        
                    </span>
                </p>
            </div>
        </div>
        <div class="loading-search flex justify-center items-center p-2 sm:p-5">
            <div
                class=" size-40 sm:size-60 rounded-full flex justify-center items-center bg-primary-200 border-[5px] dark:border-primary-300 border-primary-100">
                <img src="{{ asset('svg/loader_2.svg') }}" class="h-full w-full">
            </div>
        </div>
        <div
            class="similar-items sm:pt-8 pt-4 max-h-[75vh] overflow-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 p-1 sm:p-4">
          
        </div>
    </div>
</div>
