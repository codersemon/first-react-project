import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Topbar from "../topbar/Topbar";
import "./Layouts.scss";
import Footer from "../footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const Layouts = () => {
  return (
    <>
    <ToastContainer />
    <Topbar />
    <Header />

    <Outlet />
    
    <Footer />
    </>
  )
}

export default Layouts