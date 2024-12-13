@extends('admin.layout.main')
@section('title')
    کامنت ها تایید شده
@endsection
@section('main')
    <br>
    <div class=" flex  items-center px-5 ">
        <span class="text-xl text">کامنت های تایید شده</span>
    </div>
    <br><br>
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
                            پاسخ
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
                        <td class="px-7 py-2  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                            {{ $item->id }}</td>
                        <td class="px-7 py-2  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                            {{ $item->user_id }}</td>
                        <td class="px-7 py-1  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                            {{ $item->name }}</td>
                        <td class="px-7 py-1  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                            {{ $item->text }}</td>
                        <td> 
                            <div class=" py-3 w-100 flex justify-center items-center h-100">
                                <a type="button" href="{{ $item->page == 'blog' ? route('shortLinkBlog', ['id' => $item->page_id])  :  route('shortLink', ['id' => $item->page_id]) }}"
                                    class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500
                                     to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300
                                      dark:focus:ring-cyan-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </a>
                            </div>
                        </td>
                        <td class="px-4 py-2">
                            <div class="flex items-center">
                                <div class="w-56">
                                    <input type="text" name="replay"
                                    placeholder="پاسخ ..."
                                        class="text w-full p-2 rounded-lg text uppercase bg-gray-200 dark:bg-gray-700"
                                        value="{{ $item->replay }}" disabled>
                                </div>
                                <button
                                    class="focus:outline-none change-value mr-2 text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-200 font-lg rounded-lg text-sm size-9 flex justify-center items-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900">
                                    <i class="fa text-lg fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
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
        const change_value_buttons = document.querySelectorAll('button.change-value')
        change_value_buttons.forEach(change_value_button => {
            let icon = change_value_button.querySelector('i');
            let input = change_value_button.parentNode.querySelector('input');
            let id = change_value_button.parentNode.parentNode.parentNode.children[0].innerHTML.trim();
            const function_change_value = () => {
                if (icon.classList.contains('fa-pencil-square-o')) {
                    icon.classList.remove('fa-pencil-square-o')
                    icon.classList.add('fa-check');
                    input.disabled = false;
                    input.focus()
                } else {
                    icon.classList.add('fa-pencil-square-o')
                    icon.classList.remove('fa-check');
                    input.disabled = true;
                    window.axios({
                        method: 'post',
                        url: `/panel/comment/${id}/replay/${input.value ? input.value : 'null'}`,
                    }).then(function(response) {}).catch(function(error) {}).then(function() {});
                }
            };
            change_value_button.addEventListener('click', () => {
                function_change_value()
            })
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    function_change_value()
                }
            })

        });
    </script>
@endsection
