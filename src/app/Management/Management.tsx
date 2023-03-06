import Alert from "@/common/components/Alert";
import Button from "@/common/components/Button";
import SignIn from "@/module/SignIn";
import Link from "next/link";
import { FaPen } from "react-icons/fa";

export default function Management() {
  const getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const formatDate = `${date < 10 ? `0${date}` : date} / ${
      month < 10 ? `0${month}` : month
    } / ${year}`;

    return (
      <div className="flex items-center">
        <FaPen size={16} className="mr-3" />
        <div>{formatDate}</div>
      </div>
    );
  };

  return (
    <div className="mt-10">
      {/* <Alert /> */}
      <div className="border p-5 rounded-lg shadow-lg flex mx-auto justify-between items-end md:w-2/4">
        <div className="grow-0 md:w-2/3">
          <h5 className="text-lg font-medium mb-3 text-gray-600">
            Gestão de vendas
          </h5>
        </div>
        <div className="grow-0">
          <Button className="w-full">{getCurrentDate()}</Button>
        </div>
      </div>
    </div>
  );
}
