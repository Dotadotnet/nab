@extends('admin.layout.main')
@section('title')
    کالا های برگزیده
@endsection
@section('main')
    <div class=" max-h-[50vh] overflow-y-auto">
        <div class=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 p-4">

            @foreach ($products as $data)
                <div
                    class="flex shadow-lg dark:shadow-gray-700 items-center ps-4 border border-gray-200 rounded  dark:border-gray-700">
                    <input data-src="{{ '/storage/' . json_decode($data->img)[0] }}"
                        {{ in_array($data->id, $selecteds) ? 'checked' : '' }} id="{{ $data->id }}" type="checkbox"
                        data-name='{{ $data->name }}' name="item"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700
            dark:border-gray-600">
                    <label for="{{ $data->id }}"
                        class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $data->name }}</label>
                </div>
            @endforeach



        </div>

    </div>
    <ul id="sortbale" style="direction: ltr"
        class="sortbale w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        @foreach ($selecteds as $selected)
            @foreach ($products as $data)
                @if ($selected == $data->id)
                    <li id='{{ $selected }}' class="flex justify-center">
                        <div
                            class="size-36 select-none border-2 border-blue-600 dark:border-white  rounded-lg relative overflow-hidden">
                            <span data-id='{{ $selected }}'
                                class=" bg-red-600 remove  select-none mb-2 z-20 absolute  font-bold text-2xl
                cursor-pointer 
                  text-white 
                   hover:bg-red-500  size-10 flex items-center justify-center rounded-lg scale-75 close-search">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                            <div
                                class=" select-none absolute top-0 right-0 size-full z-10 text-white flex justify-center items-center bg-[rgba(0,0,0,0.5)] ">
                                {{ $data->name }}
                            </div>
                            <img class="size-full select-none object-cover"
                                src="{{ '/storage/' . json_decode($data->img)[0] }}" alt="">
                        </div>
                    </li>
                @endif
            @endforeach
        @endforeach
    </ul>
    <script>
        const inputs_chacked = document.querySelectorAll('input[type~=checkbox]');
        const sortbale_ul = document.querySelector('ul#sortbale')
        inputs_chacked.forEach(input_chacked => {
            input_chacked.addEventListener('change', () => {
                reload_chacked_items()
            })
        });
        const reload_chacked_items = () => {
            let elements = document.querySelectorAll('ul#sortbale li')
            inputs_chacked.forEach(input_chacked => {
                if (!input_chacked.checked) {
                    elements.forEach(element => {
                        if (element.id == input_chacked.id) {
                            element.remove()
                        }
                    });
                } else {
                    let founded = false;
                    let els = document.querySelectorAll('ul#sortbale li')
                    els.forEach(element => {
                        if (element.id == input_chacked.id) {
                            founded = true;
                        }
                    });
                    if (!founded) {
                        sortbale_ul.innerHTML += `
              <li id='${input_chacked.id}' class="flex justify-center">
    <div class="size-36 select-none border-2 border-blue-600 dark:border-white  rounded-lg relative overflow-hidden">
        <span data-id='${input_chacked.id}'
        class=" bg-red-600 remove  select-none mb-2 z-20 absolute  font-bold text-2xl
cursor-pointer 
  text-white 
   hover:bg-red-500  size-10 flex items-center justify-center rounded-lg scale-75 close-search">

        <i class="fa fa-times" aria-hidden="true"></i>
    </span>
        <div class=" select-none absolute top-0 right-0 size-full z-10 text-white flex justify-center items-center bg-[rgba(0,0,0,0.5)] ">
           ${input_chacked.dataset.name}
        </div>
            <img class="size-full select-none object-cover" src="${input_chacked.dataset.src}" alt="">
    </div>
</li>
              `
                    }



                    let elements = document.querySelectorAll('ul#sortbale li span.remove')
                    elements.forEach(element => {
                        element.addEventListener('click', () => {
                            inputs_chacked.forEach(input_chacked => {
                                if (input_chacked.id == element.dataset.id) {
                                    input_chacked.checked = false;
                                }
                            });
                            element.parentNode.parentNode.remove()
                            reload_data_on_api()
                        })
                    });
                }


            });
            window.Sortable.create(sortbale_ul, {
                group: 'sortbale',
                animation: 150,
                ghostClass: 'opacity-20',
                dragClass: 'bg-blue-50',
                onChange: function( /**Event*/ evt) {
                    reload_data_on_api()
                }
            });
            reload_data_on_api()
        }
        window.addEventListener('load', () => {
            reload_chacked_items()
        })
        const reload_data_on_api = () => {
            let elements = document.querySelectorAll('ul#sortbale li')
            let data = [];
            elements.forEach(element => {
                data.push(element.id)
            });
            window.axios({
                method: 'post',
                url: `/panel/config/` + 'favorites' + '/' + JSON.stringify(data),
            }).then(function(response) {}).catch(function(error) {}).then(function() {});
        }
    </script>
@endsection
