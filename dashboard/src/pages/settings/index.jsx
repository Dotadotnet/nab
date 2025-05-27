import ControlPanel from "../ControlPanel";
import React, { useState, useEffect } from "react";
import axios from "@/utils/axios";
import ConfigInput from "./ConfigInput";

const Settings = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        if (data == null) {
            axios.get('/settings/get-all').then(function (response) {
                let data = response.data.data;
                setData(data);
            })
        }
    }, [data])





    return (
        <>
            <ControlPanel>
                <div className="grid grid-cols-1 gap-5  sm:grid-cols-2">

                    {data == null
                        ?
                        <h1 className="text-center text-2xl"> درحال بارگزاری  </h1>
                        :
                        data.length == 0 ? <h1 className="text-center text-2xl"> هیچ تنظیماتی وجود ندارد  </h1>
                            :
                            data.map((item) => <ConfigInput item={item} />)
                    }







                </div>
            </ControlPanel>
        </>
    );
};

export default Settings;
