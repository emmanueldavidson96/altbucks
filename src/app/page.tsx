
import Banner from "./components/Homepage_Components/Banner";
import How_Altbucks_Works from "./components/Homepage_Components/How_Altbucks_Works";
import PopularCategories from "./components/Homepage_Components/PopularCategories";
import ViewReviews from "./components/Website_Shared_Components/ViewReviews";
import EarnRewards from "./components/Website_Shared_Components/EarnRewards";
import Footer from "./components/Website_Shared_Components/Footer";
import Navbar from "./components/Website_Shared_Components/Navbar";

export default function Home() {
  return (
    <div className="w-screen h-fit bg-white">
      <Navbar />
      <Banner />
      <How_Altbucks_Works />
      <PopularCategories />
      <ViewReviews />
      <EarnRewards />
      <Footer/>
    </div>
  );
}
