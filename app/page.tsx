import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-nav-bar";
import { navItems } from "@/data";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiences />
        <Approach />
      </div>
    </main>
  );
}
