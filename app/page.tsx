import Orders from "@/components/Orders";
import Projects from "@/components/Projects";
import NavBar from "@/components/NavBar";
import NavOptions from "@/components/NavOptions";
import Blogs from "@/components/Blogs";
import Sales from "@/components/Sales";
import ActiveUsers from "@/components/ActiveUsers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F8F9FA] px-5 py-6">
      <NavOptions className="hidden lg:block"/>
      <NavBar />
      <Blogs />
      <ActiveUsers />
      <Sales />
      <Projects />
      <Orders />
      <Footer />
    </main>
  );
}
