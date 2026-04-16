import { ContactFooter } from "@/components/sections/contact-footer";
import { Expertise } from "@/components/sections/expertise";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main id="main-content" className="flex flex-1 flex-col outline-none" tabIndex={-1}>
        <Hero />
        <FeaturedProjects />
        <Expertise />
        <ContactFooter />
      </main>
    </div>
  );
}
