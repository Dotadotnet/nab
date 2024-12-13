<div class="">
    <label class="  w-100">
        <span class=" dark:text-white text-black">{{$text}} :</span>
        <br>
        <div class="input-admin">
            <div>
                <div class=" flex justify-center items-center p-1 rounded-full dark:hover:opacity-100 hover:opacity-100 cursor-pointer">
                    <i class="fa fa-times " aria-hidden="true"></i>
                </div>
            </div>
            <input type="text" maxlength="<?= isset($maxlen) ? $maxlen : "" ?>" name="{{$name}}" placeholder="{{$text}} ..."  
            value="@if(isset($value))<?= isset($value) ? $value : "" ?>@else{{ old($name) }}@endif" data-type="{{$type}}">
        </div>
    </label>
</div>
    