import Tag from "./components/Tag";
import Image from "next/image";
import Button from "../app/components/Button";

export default function LightPage() {
  return (
    <>
      <div className="flex flex-col mb-10">
        <div className="flex-col flex md:flex md:flex-row md:text-left mt-20 text-center items-center justify-center gap-10 sm:gap-20 mx-10">
          <div className="flex flex-col md:w-1/3 gap-3 mr-5">
            <div className="justify-start items-start">
              <Tag color="bg-orange-400" text="AVAILABLE AT UF" />
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900 md:text-5xl text-left">
              Every group chat, every course{" "}
              <span className="underline"> in one place</span>
            </h1>
            <p className="text-gray-900 text-left">
              No more trying to find the Groupme. No more taking your classes
              all alone. CourseLynx makes it easy to find your{" "}
              <span className="text-blue-600">classes, clubs, groups</span> so
              you can connect with your classmates.
            </p>
            <div className="flex gap-4">
              <Tag color="bg-red-500" text="HW Help" />
              <Tag color="bg-blue-300" text="Study Groups" />
              <Tag color="bg-green-300" text="Advice" />
            </div>
          </div>
          <div className="md:w-1/4 w-1/2 flex justify-center">
            <Image
              src={"/ui-graphic2.png"}
              alt="courselynx ui"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-7 md:mt-0 mb-10 sm:text-center flex-col gap-10">
          <button className="flex border-black border-2 text-gray-900 rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold mr-2 shadow-offset-gray ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
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
          {/* <div className="animate-bounce200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-down"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
            </svg>
          </div> */}
        </div>
      </div>
    </>
  );
}
