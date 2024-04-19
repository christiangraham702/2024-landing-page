"use client";

import * as React from "react";
import { Typography } from "@cred/neopop-web/lib/components";
import { FontVariant, colorPalette } from "@cred/neopop-web/lib/primitives";
import { Bangers } from "next/font/google";
import Button from "../components/Button";
import Image from "next/image";
const bangers = Bangers({ subsets: ["latin"], weight: ["400"] });

export default function BlogPost() {
  return (
    <div>
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
            <Button text="Web Version" href="/web"/>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Best Restaurants Near Campus
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            Food near UF
          </h2>
          <div className="mt-4 text-gray-600">
            <span>Author: John Doe</span>
            <span className="mx-2">|</span>
            <span>Published: Jan 1, 2022</span>
            <span className="mx-2">|</span>
            <span>Updated: Jan 2, 2022</span>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Food
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              UF
            </span>
          </div>
          <div className="mt-8">
            {/* <img
              className="w-full h-64 object-cover rounded"
              src="https://source.unsplash.com/random"
              alt="Restaurant"
            /> */}
            <h3 className="text-2xl font-semibold text-gray-900 mt-4">Intro</h3>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="w-full h-64 object-cover rounded"
              src="https://source.unsplash.com/random"
              alt="Restaurant"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mt-4">
              <span className="font-5xl">#1 </span>Teds Temptations
            </h3>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="w-full h-64 object-cover rounded"
              src="https://source.unsplash.com/random"
              alt="Restaurant"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mt-4">
              <span className="font-5xl">#2 </span>Teds Tacos
            </h3>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="w-full h-64 object-cover rounded"
              src="https://source.unsplash.com/random"
              alt="Restaurant"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mt-4">
              <span className="font-5xl">#3 </span>Teds Treats
            </h3>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="w-full h-64 object-cover rounded"
              src="https://source.unsplash.com/random"
              alt="Restaurant"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mt-4">
              <span className="font-5xl">#4 </span>Teds TidBits
            </h3>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-2 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
