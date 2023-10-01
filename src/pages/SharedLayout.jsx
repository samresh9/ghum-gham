import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Logo } from "../components/Logo";

function SharedLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Logo />
        <Outlet />
      </div>
    </>
  );
}
export default SharedLayout;
