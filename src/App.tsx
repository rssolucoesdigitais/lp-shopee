import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Opportunity from "@/components/sections/Opportunity";
import Structure from "@/components/sections/Structure";
import Differential from "@/components/sections/Differential";
import Process from "@/components/sections/Process";
import WhoFor from "@/components/sections/WhoFor";
import FinalCta from "@/components/sections/FinalCta";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Opportunity />
      <Structure />
      <Differential />
      <Process />
      <WhoFor />
      <FinalCta />
    </Layout>
  );
}
