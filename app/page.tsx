import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import Languages from "@/components/Languages";
import WorkingKnowlege from "@/components/WorkingKnowlege";
import Design from "@/components/Design";
import FullStackProj from "@/components/FullStackProj";
import ReactNativeProj from "@/components/ReactNativeProj";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        {/* <Grid /> */}
        <Languages />
        <RecentProjects />
        <FullStackProj />
        <ReactNativeProj />
        <Design />
        <Experiences />
        <WorkingKnowlege />
        <Footer />
      </div>
    </main>
  );
}
