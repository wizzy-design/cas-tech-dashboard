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
    <main className="bg-[#F8F9FA] px-5 py-6 lg:flex">
      <NavOptions className="hidden lg:block" />

      <div className="pl-3 lg:overflow-x-hidden space-y-6 lg:space-y-0">
        <NavBar />
        <Blogs />
        <div className="flex flex-col lg:flex-row lg:py-2 lg:justify-between space-y-6 lg:space-y-0">
          <ActiveUsers />
          <Sales />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0">
          <Projects />
          <Orders />
        </div>
        <Footer />
      </div>
    </main>
  );
}
