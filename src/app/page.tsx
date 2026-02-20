import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Portfolio />
      <Services />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
