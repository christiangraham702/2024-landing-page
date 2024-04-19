import NavBar from "./components/nav-bar";
import LightPage from "./light-page";
import HomeSection2 from "./home-section2";
import Section3 from "./section3";
import Faqs from "./faqs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Footer from "./components/Footer";

import * as React from "react";

export default function Home() {
  return (
    <div className=" content-center justify-center flex flex-col bg-uibg border-none">
      <div className="w-screen flex flex-col content-center items-center">
        <Alert className="bg-buttonblue border border-black w-5/6 md:w-1/2 lg:w-1/3 mt-2 rounded-lg h-7 items-center content-center flex justify-center py-4 text-center shadow-offset-gray">
          <AlertTitle className="font-semibold text:sm md:text-md text-gray-100">
            Now available at{" "}
            <span className="rounded-md bg-orange-500 p-1 mb">UF</span>{" "}
            <span className=" text:md md:text-lg font-medium text-gray-200">
              - Sign up with your .edu email 🔒
            </span>
          </AlertTitle>
        </Alert>

        <NavBar />
      </div>
      <div className="flex w-screen content-center justify-center">
        <LightPage />
      </div>
      <div className="bg-uibgdark pb-16 ">
        <HomeSection2 />
      </div>
      <div className="w-full flex content-center justify-center my-20">
        <Faqs />
      </div>
      <Footer />
    </div>
  );
}
