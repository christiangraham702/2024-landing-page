"use client";
import { Typography } from "@cred/neopop-web/lib/components";
import { FontVariant, colorPalette } from "@cred/neopop-web/lib/primitives";
import { Bangers } from "next/font/google";
import Button from "./Button";
import Image from "next/image";

const bangers = Bangers({ subsets: ["latin"], weight: ["400"] });

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-screen max-w-screen-lg m-3 mt-5">
      <div className="ml-2 flex flex-col mr-2">
        <Image
          src="/logo.png"
          alt="courselynx Logo"
          height={40}
          width={40}
          className="ml-5"
        />
      </div>
      <div className="flex gap-8">
        <a
          href="/blog"
          className="hover:text-blue-500 transition duration-300 ease-in-out text-center mt-2 hover:border-b-3 border-white"
        >
          <Typography
            {...FontVariant.HeadingBold14}
            color={colorPalette.popBlack[500]}
          >
            Blog
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
        <Button text="Web Version" href="/web"/>
      </div>
    </nav>
  );
}
