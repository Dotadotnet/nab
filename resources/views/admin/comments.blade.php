@extends('admin.layout.main')
@section('title')
    کامنت ها
@endsection
@section('main')
    <br>
    <div class=" flex justify-between items-center px-5 ">
        <span class="text-xl text">کامنت های دیده نشده</span>
        <a class="text-white hover:text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
            href="/panel/comment/create">کامنت های تایید شده</a>
    </div>
    <br><br>
    @if (count($data))
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <div class=" w-100 flex justify-center items-center h-100">
                                آیدی
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class=" w-100 flex justify-center items-center h-100">
                                آیدی کاربر
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class=" w-100 flex justify-center items-center h-100">
                                نام
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class=" w-100 flex justify-center items-center h-100">
                                متن
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class=" w-100 flex justify-center items-center h-100">
                                مشاهده صحفه
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class=" w-100 flex justify-center items-center h-100">
                                قبول کردن
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class=" w-100 flex justify-center items-center h-100">
                                حذف
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data as $item)
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td
                                class="px-7 py-2  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                                {{ $item->id }}</td>
                            <td
                                class="px-7 py-2  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                                {{ $item->user_id }}</td>
                            <td
                                class="px-7 py-1  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                                {{ $item->name }}</td>
                            <td
                                class="px-7 py-1  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                                {{ $item->text }}</td>
                            <td>
                                <div class=" py-3 w-100 flex justify-center items-center h-100">
                                    <a type="button" href="{{ route('shortLink', ['id' => $item->page_id]) }}"
                                        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500
                                     to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
                                      dark:focus:ring-cyan-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div class=" py-3 w-100 flex justify-center items-center h-100">
                                    <button onclick="remove_comment({{ $item->id }},this)" type="button"
                                        class="text-white bg-gradient-to-r from-red-400 via-red-500
                                     to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300
                                      dark:focus:ring-red-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div class=" py-3 w-100 flex justify-center items-center h-100">
                                    <button type="button" onclick="accept_comment({{ $item->id }},this)"
                                        class="text-white font-bold bg-gradient-to-r from-green-400 via-green-500
                                     to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300
                                      dark:focus:ring-green-800  rounded-lg text-lg px-5 py-2.5 text-center">
                                        <i class="fa fa-check" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <script>
            function remove_comment(id, el) {
                el.parentElement.parentElement.parentElement.remove();
                window.axios({
                    method: 'delete',
                    url: window.location.protocol + "//" + window.location.host + '/panel/comment/' + id,
                }).then(function(response) {
                    window.ReloadComment();
                }).catch(function(error) {}).then(function() {});
            }

            function accept_comment(id, el) {
                el.parentElement.parentElement.parentElement.remove();
                window.axios({
                    method: 'put',
                    url: window.location.protocol + "//" + window.location.host + '/panel/comment/' + id,
                }).then(function(response) {
                    window.ReloadComment();
                }).catch(function(error) {}).then(function() {});
            }
        </script>
    @else
        <br>
        <br>
        <h1 class="text text-center">
            کامنت جدیدی وجود ندارد
        </h1>
    @endif
@endsection
