import DisplayBox from "../app/components/DisplayBox";

export default function HomeSection2() {
  return (
    <div className="flex flex-col content-center justify-center text-left mt-10 bg-sky-900 rounded-se">
      <h1 className="text-6xl text-gray-300 font-bold ml-10 mt-16">
        Highlights
      </h1>
      <div className="flex flex-col gap-4 content-center justify-center text-left items-center sm:flex sm:flex-row">
        <DisplayBox
          text="Students only - no bots"
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-lock"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
              <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
            </svg>
          }
          bgColor="bg-green-300"
        />
        <DisplayBox
          text="Every course, every group chat"
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-vocabulary"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
              <path d="M12 5v16" />
              <path d="M7 7h1" />
              <path d="M7 11h1" />
              <path d="M16 7h1" />
              <path d="M16 11h1" />
              <path d="M16 15h1" />
            </svg>
          }
          bgColor="bg-blue-300"
        />
        <DisplayBox
          text="Organized chats - no spam"
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-category-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 4h6v6h-6z" />
              <path d="M4 14h6v6h-6z" />
              <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            </svg>
          }
          bgColor="bg-orange-400"
        />
      </div>
      <div className="flex flex-col sm:flex sm:flex-row items-center justify-center gap-16 text-center mt-5 mb-10">
        <div className="flex flex-col text-6xl font-bold gap-5 ">
          <h1>4K+</h1>
          <div className="text-center bg-green-400 text-4xl rounded-md px-4 py-2 text-sky-900 font-bold">
            courses
          </div>
        </div>
        <div className="flex flex-col text-6xl font-bold gap-5">
          <h1>300+</h1>
          <div className="text-center bg-green-400 text-4xl rounded-md px-4 py-2 text-sky-900 font-bold">
            students
          </div>
        </div>
        <div className="flex flex-col text-6xl gap-5 font-bold">
          <h1>10</h1>
          <div className="text-center bg-green-400 text-4xl rounded-md px-4 py-2 text-sky-900 font-bold">
            partners
          </div>
        </div>
      </div>
    </div>
  );
}
