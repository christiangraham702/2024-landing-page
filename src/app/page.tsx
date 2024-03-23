import NavBar from "./nav-bar";
import LightPage from "./light-page";
import HomeSection2 from "./home-section2";

export default function Home() {
  return (
    <div className="">
      <div className="content-center justify-center w-screen flex">
        <NavBar />
      </div>
      <div className="flex w-screen content-center justify-center">
        <LightPage />
      </div>
      <HomeSection2 />
    </div>
  );
}
