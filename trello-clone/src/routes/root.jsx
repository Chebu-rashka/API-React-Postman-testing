import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/Navbar";

export default function Root() {
  return (
    <main className=" flex ">
      <section>
        <NavBar />
      </section>
      {/* <section>
        <Header />
      </section> */}
      <section>
        <Outlet />
      </section>
    </main>
  );
}

//code tsegtstei bolgoj bga

// ? screen n why 3huvaagdaad bgan bol?
