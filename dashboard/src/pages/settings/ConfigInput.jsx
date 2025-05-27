import axios from "@/utils/axios";


const ConfigInput = ({ item }) => {
    return (
        <label key={item._id} htmlFor={item.key}>
            <div className="flex flex-col">
                <span>{item.name} :</span>
                <div className="flex w-full sm:justify-start justify-center ">
                    <input onChange={(event) => {
                        axios.patch("/dynamic/update/settings/key/" + item.key + "/value/" + event.target.value)                   
                    }} id={item.key} defaultValue={item.value} name={item.key} type={item.type == "number" ? "number" : "text"} placeholder={item.name + " ..."} className=" max-w-96 w-full mt-3  rounded-lg hide-arrow " required />
                </div>
            </div>
        </label>
    );
};

export default ConfigInput;