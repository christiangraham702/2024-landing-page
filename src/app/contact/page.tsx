"use client";
import { Typography } from "@cred/neopop-web/lib/components";
import { FontVariant, colorPalette } from "@cred/neopop-web/lib/primitives";
import { Bangers } from "next/font/google";
import Button from "../components/Button";
import Image from "next/image";
const bangers = Bangers({ subsets: ["latin"], weight: ["400"] });


export default function BlogPage() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <nav className="flex justify-between items-center w-screen max-w-screen-lg m-3 mt-5">
          <div className="ml-2 flex flex-col mr-2">
            <Image
              src="/logo.png"
              alt="courselynx Logo"
              height={50}
              width={50}
              className="ml-5"
            />
          </div>
          <div className="flex gap-8">
            <a
              href="/"
              className="hover:text-blue-500 transition duration-300 ease-in-out text-center mt-2 hover:border-b-3 border-white"
            >
              <Typography
                {...FontVariant.HeadingBold14}
                color={colorPalette.popBlack[500]}
              >
                Home
              </Typography>
            </a>
            <a
              href="/blog"
              className="hover:text-blue-500 transition duration-300 ease-in-out text-center mt-2 hover:border-b-3 border-white"
            >
              <Typography
                {...FontVariant.HeadingBold14}
                color={colorPalette.popBlack[500]}
              >
                Contact
              </Typography>
            </a>
            <Button text="Web Version" />
          </div>
        </nav>
        <div className="flex flex-col items w-2/3  mt-20 items-center justify-center gap-6">
          <h1 className="font-bold text-5xl text-gray-900 text-center w-2/3 mb-4">
            Contact
          </h1>
          <div className="flex flex-col text-center">
            <h3 className="text-gray-900 text-xl font-medium mb-4">
              Have a question? <br></br> Want to know more about CourseLynx?
            </h3>
            <p className="text-gray-900 text-lg">Send us an email at</p>
            <a href="mailto:contact@courselynx.com" className="text-blue-600">
              contact@courselynx.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
