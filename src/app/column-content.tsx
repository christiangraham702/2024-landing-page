import { Bangers } from "next/font/google";
import Image from "next/image";
import Button from "../app/components/Button";

const bangers = Bangers({ subsets: ["latin"], weight: ["400"] });

export default function ColumnContent() {
  return (
    <>
      <div className="flex text-left items-center w-2/3 text-gray-200">
        <div className="w-2/3 mb-20">
          <h1 className="text-5xl font-bold mb-3 0">
            Every group chat, every course - <br></br>in one place
          </h1>
          <p className="text-sm">
            No more trying to find the Groupme. No more taking your classes all
            alone. CourseLynx makes it easy to find your{" "}
            <span className="text-blue-600">classes, clubs, groups</span> so you
            can connect with your classmates.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button text="Download"/>
            <p className="text-sm text-gray-500">
              300+ UF students have already downloaded
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/homeGraphic.png"
            alt="courselynx Logo"
            height={500}
            width={500}
            className="ml-5"
          />
        </div>
      </div>
    </>
  );
}
