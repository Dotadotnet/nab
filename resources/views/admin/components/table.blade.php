@php
    $interface_rule_image_name = ['image', 'img', 'photo'];
@endphp
{{-- <div class=" relative">
    <i class="fa fa-search absolute text-sm text-gray-300" aria-hidden="true" style="right: 10px; top:8px"></i>
    <input style="padding: 7px 33px 7px 10px;" type="text" id="table-search"
        class="block text-sm text-gray-900 border border-gray-300 
     rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="سرچ کنید ...">
</div> --}}
<br>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                @foreach ($column_name as $key => $value)
                    <th scope="col" class="px-6 py-3">
                        {{ $value }}
                    </th>
                @endforeach
                <th scope="col" class="px-6 py-3">
                    <div class=" w-100 flex justify-center items-center h-100">
                        تغییر
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
                    @foreach ($column_name as $key => $value)
                        @if (in_array($key, $interface_rule_image_name))
                            @php
                                $image_src = null;
                                if (is_array(json_decode($item[$key]))) {
                                    $image_src = json_decode($item[$key])[0];
                                } else {
                                    $image_src = $item[$key];
                                }

                            @endphp
                            <td style="min-width:100px;"
                                class=" py-1  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                                <img class="w-20 h-20 border-1 rounded-full" src="{{ Storage::url($image_src) }}">
                            </td>
                            {{-- {{ url($item[$key]) }} --}}

                        @elseif($key === 'link')
                        <td class="px-7 py-1  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                            <a href="{{ $item[$key] }}"
                                class="focus:outline-none show-order-info text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm size-11 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
                                <i class="fa text-2xl fa-eye" aria-hidden="true"></i>
                            </a>
                        </td>
                        @else
                            <td
                                class="px-7 py-1  font-medium text-gray-900 whitespace-nowrap dark:text-white font-parastoo">
                                {{-- {{$item[$key]}} --}}
                                {{ $item[$key] }}
                            </td>
                        @endif
                    @endforeach
                    <td>
                        <div class=" w-100 flex justify-center items-center h-100">
                            <a href="/panel/{{ $table }}/{{ $item['id'] }}"
                                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
                            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800
                             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                <i class="fa fa-pencil-square-o " style="color: white !important"
                                    aria-hidden="true"></i>
                            </a>
                    <td>
                        <div class=" w-100 flex justify-center items-center h-100">
                            <button onclick="table_item_delete(this,'/panel/{{ $table }}/{{ $item['id'] }}')"
                                type="button"
                                class="text-white bg-gradient-to-r from-red-400 via-red-500
                                 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300
                                  dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
@if (!isset($data[0]))
    <h1 class=" w-100 text-center mt-4 dark:text-white text-black ">آیتمی وارد نشده است</h1>
@endif
<script>
    function table_item_delete(button, api) {
        if (confirm('آیا از حذف مطمئنید ؟') == true) {
            let current_url = window.location.protocol + "//" + window.location.host + api;
            button.parentNode.parentNode.parentNode.remove()
            const deleteMethod = {
                method: 'DELETE', // Method itself
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute(
                        'content'), // Indicates the content 
                },
            }
            fetch(current_url, deleteMethod).then(response => response.json())
        } else {

        }
    }
</script>
