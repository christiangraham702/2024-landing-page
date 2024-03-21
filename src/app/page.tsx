import Image from "next/image";
import NavBar from "./nav-bar";
// import HomeContent from "./home-content";
import ColumnContent from "./column-content";
import DisplayBox from "../app/components/DisplayBox";
import LightPage from "./light-page";

export default function Home() {
  return (
    <div className="">
      <div className="content-center justify-center w-screen flex">
        <NavBar />
      </div>
      <div className="flex w-screen content-center justify-center">
        <LightPage />
      </div>
    </div>
  );
}
