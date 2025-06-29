import ControlPanel from "@/pages/ControlPanel";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


export default function ChoiceTypeTable() {
  const [data, setData] = useState(null);
  const { table } = useParams();

  useEffect(() => {
    axios.get("/admin/get-fields/" + table )
      .then((response) => { setData(response.data.data) })
      .catch((error) => console.error(error))
  }, [])

  var listItems = null;
  if (data) {
    listItems = data.map((item) =>
      <a href={"./" + item} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item}</h5>
      </a>
    );
  }


  return (
    <ControlPanel>
      {listItems ?
        listItems.length == 0 ?
          <h1 className="text-center mt-32 text-2xl"> موردی یافت نشد </h1>
          :
          <>
            <h1 className="mb-5 text-4xl font-bold mr-16">نام جداول :</h1>
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {listItems}
            </div>
          </>
        : <h1 className="text-center mt-32 text-2xl"> در حال بارگذاری </h1>}
    </ControlPanel>
  );
}
