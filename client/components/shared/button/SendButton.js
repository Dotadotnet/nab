import { IoIosSend } from "react-icons/io";
import Spinner from "../Spinner";

const SendButton = ({ isLoading, title = "ارسال فرم" }) => {
  return (
    <button
      type="submit"
      className="group inline-flex items-center border border-green-300 dark:border-blue-600 !px-4 !py-2 rounded-md text-green-500 dark:text-blue-500 hover:bg-green-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500 transition-transform duration-300 transform group-hover:translate-x-1 group-focus:translate-x-1"
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <IoIosSend className="h-6 w-6 transition-transform duration-300 transform group-hover:translate-x-1 group-focus:translate-x-1" />
          <span className="mr-2"> {title}</span>
        </>
      )}
    </button>
  );
};

export default SendButton;
