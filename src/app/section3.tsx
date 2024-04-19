import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Section3() {
  return (
    <>
      <div className="flex flex-col items-center content-center text-gray-900 mt-20 gap-5 mb-15">
        <h1 className="sm:text-5xl font-bold bg-teal-400 px-4 py-2 rounded-lg text-3xl">
          Don&apos;t take your classes alone.
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full md:max-w-md max-w-xs"
        >
          <CarouselContent className="-ml-1">
            <CarouselItem>
              <div className="flex flex-col px-5 py-7 bg-cyan-100 rounded-lg border border-gray-950 gap-3 items-center content-center mt-10 md:basis-3/4 lg:basis-4/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-books"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                  <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                  <path d="M5 8h4" />
                  <path d="M9 16h4" />
                  <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
                  <path d="M14 9l4 -1" />
                  <path d="M16 16l3.923 -.98" />
                </svg>
                <p>
                  <span className="font-bold bg-orange-300 p-1 rounded-lg">
                    Treasure Trove of Resources:
                  </span>
                  Why struggle alone when you can access collective wisdom?
                  CourseLynx users share notes, study guides, and invaluable
                  insights , turning the platform into a rich repository of
                  resources.{" "}
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col px-5 py-7 bg-cyan-100 rounded-lg border border-gray-950 gap-3 items-center content-center mt-10 md:basis-1/2 lg:basis-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-users"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <p>
                  <span className="font-bold ">
                    <span className="bg-orange-300 p-1 rounded-lg">
                      70% of students
                    </span>{" "}
                    say study groups increase motivation:{" "}
                  </span>
                  Studies show that collaborative learning not only enhances
                  understanding but also boosts retention rates. Connect,
                  discuss, and conquer your courses together on CourseLynx.{" "}
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col px-5 py-7 bg-cyan-100 rounded-lg border border-gray-950 gap-3 items-center content-center mt-10  md:basis-1/2 lg:basis-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-globe"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" />
                  <path d="M11 17v4" />
                  <path d="M7 21h8" />
                </svg>
                <p>
                  <span className="font-bold ">
                    <span className="bg-orange-300 p-1 rounded-lg">
                      Stay connected, anywhere:
                    </span>{" "}
                  </span>
                  Don&apos;t let distance make you feel isolated. Whether
                  you&apos;re studying from your dorm, a café, or halfway across
                  the world, find your study group and stay connected with
                  CourseLynx.{" "}
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* <div className=" flex flex-col sm:flex sm:flex-row items-center justify-center gap-7 sm:w-3/4 mb-10 w-full">
          <div className="flex flex-col px-5 py-7 bg-gray-50 w-3/4 rounded-lg border border-gray-950 gap-3 items-center content-center mt-10 flex-1 shadow-offset-gray ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-books"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              <path d="M5 8h4" />
              <path d="M9 16h4" />
              <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
              <path d="M14 9l4 -1" />
              <path d="M16 16l3.923 -.98" />
            </svg>
            <p>
              <span className="font-bold bg-orange-300 p-1 rounded-lg">
                Treasure Trove of Resources:
              </span>
              Why struggle alone when you can access collective wisdom?
              CourseLynx users share notes, study guides, and invaluable
              insights , turning the platform into a rich repository of
              resources.{" "}
            </p>
          </div>
          <div className="flex flex-col px-5 py-7 bg-gray-50 w-3/4 rounded-lg border border-gray-950 gap-3 items-center content-center mt-10 flex-1 shadow-offset-gray ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-users"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p>
              <span className="font-bold ">
                <span className="bg-orange-300 p-1 rounded-lg">
                  70% of students
                </span>{" "}
                say study groups increase motivation:{" "}
              </span>
              Studies show that collaborative learning not only enhances
              understanding but also boosts retention rates. Connect, discuss,
              and conquer your courses together on CourseLynx.{" "}
            </p>
          </div>
          <div className="flex flex-col px-5 py-7 bg-gray-50 w-3/4 rounded-lg border border-gray-950 gap-3 items-center content-center mt-10 flex-1 shadow-offset-gray ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-globe"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" />
              <path d="M11 17v4" />
              <path d="M7 21h8" />
            </svg>
            <p>
              <span className="font-bold ">
                <span className="bg-orange-300 p-1 rounded-lg">
                  Stay connected, anywhere:
                </span>{" "}
              </span>
              Don&apos;t let distance make you feel isolated. Whether you&apos;re studying
              from your dorm, a café, or halfway across the world, find your
              study group and stay connected with CourseLynx.{" "}
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
