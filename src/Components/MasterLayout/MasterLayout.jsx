import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function MasterLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main id="content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
