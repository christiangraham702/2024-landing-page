"use client";
import { CiLock } from "react-icons/ci";
import { IconContext } from "react-icons";

export default function DisplayBox() {
  return (
    <>
      <div className="flex flex-col border-2 border-blue-600 rounded-lg bg-slate-950 al items-center content-center px-10 py-10">
        {/* <IconContext.Provider value={{ color: "red", size: 80 }} size={40}>
          <div>
            <CiLock className="w-4 h-10" />
          </div>
        </IconContext.Provider> */}
        <p className="text-gray-200 ">ted is fucking cool af</p>
      </div>
    </>
  );
}
