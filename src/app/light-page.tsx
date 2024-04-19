import Tag from "./components/Tag";
import Image from "next/image";
import Button from "../app/components/Button";

export default function LightPage() {
  return (
    <>
      <div className="flex flex-col md:mb-36 mb-12">
        <div className="flex-col flex md:flex md:flex-row md:text-left mt-20 text-center items-center justify-center gap-2 md:gap-0 mx-10">
          <div className="flex flex-col md:w-3/5 gap-2 ">
            {/* <div className="justify-start items-start">
              <Tag color="bg-orange-400" text="AVAILABLE AT UF" />
            </div> */}
            <h1 className="text-6xl font-bold mb-3 text-gray-900 md:text-7xl text-left tracking-tighter leading-11">
              Every group chat, every course in one place
            </h1>
            <p className="text-gray-900 text-left leading-7 max-w-4xl text-lg">
              No more trying to find the Groupme. No more taking your classes
              all alone.
            </p>
            <div className="flex gap-2 mt-2">
              <Tag color="bg-uibg" text="HW Help" />
              <Tag color="bg-uibg" text="Study Groups" />
              <Tag color="bg-uibg" text="Advice" />
            </div>
          </div>
          <div className="md:w-1/4 w-2/5 flex justify-center mb-3">
            <Image
              src={"/stacked-ui2.png"}
              alt="courselynx ui"
              layout="responsive"
              width={700}
              height={500}
              // className="perspective-500"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-7 md:mt-0 mb-5 sm:text-center flex-col gap-10 z-20">
          <button className="flex border-black border text-gray-900 rounded-lg bg-buttonblue px-4 py-2 text-center font-normal mr-2 shadow-offset-gray ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <p className="mt-1">Download</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-download"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
            {/* </svg> */}
          </button>
        </div>
      </div>
    </>
  );
}
