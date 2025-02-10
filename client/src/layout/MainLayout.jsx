import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <main>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div className="min-h-[calc(100vh-132px)]">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default MainLayout;
