import Image from "next/image";
import Button from "../app/components/Button";

export default function HomeSection2() {
  return (
    <>
      <div className="flex  flex-col items-center justify-center w-full my-20 gap-10 md:flex md:flex-row">
        <div className="md:w-1/3 w-3/5 flex justify-center mb-3 ">
          <Image
            src={"/courses-graphic2.png"}
            alt="courselynx ui"
            layout="responsive"
            width={700}
            height={500}
            // className="perspective-500"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-10 p-10">
          <h1 className="text-6xl font-bold text-uibg">Why use CourseLynx?</h1>
          <ul className="text-uibg checkmark-list space-y-11 text-lg ml-6 font-medium tracking-wide">
            <li> Groupme sucks</li>
            <li> No bots - everyone on CourseLynx is student</li>
            <li> Easily join the group chats for all of your courses</li>
            <li>
              {" "}
              Organized conversations - discussion board and group chat for each
              course
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex content-center justify-center p-10">
          <h1 className="text-uibg bg-buttonblue rounded-lg px-4 py-2 font-bold text-3xl md:text-5xl shadow-offset-gray border border-black">
            Never take another class alone.
          </h1>
        </div>
        <div className="text-uibg flex flex-col content-center justify-center md:w-1/2 text-center gap-5 my-20">
          <h1 className="font-bold text-4xl">Help shape the future of CourseLynx</h1>
          <p>
            This app is made for students, so we should probably listen to what
            you guys actually want. Take our survey and leave any feedback,
            feature suggestions, or questions you have about the app. We&apos;re also hosting user interviews! Sign up using the links below!
          </p>
          <div>
            <Button text="Take the Survey" href="https://forms.gle/Es935NvqhBqxtvLh8" />
            <Button text="User Interview" href="https://calendly.com/courselynx/1-on-1-interview"/>
            </div>
          
        </div>
      </div>
    </>
  );
}
