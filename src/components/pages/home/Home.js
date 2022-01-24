import React from "react";
import Banner from "../../banner/Banner";
import Header from "../../header/Header";
import SideNavigation from "../../sidenav/SideNavigation";
import ModalCreate from "../../widgets/modals/ModalCreate";
import ModalDelete from "../../widgets/modals/ModalDelete";
import ModalSuccess from "../../widgets/modals/ModalSuccess";
import StudentTable from "./students/StudentsTable";

const Home = () => {
  return (
    <main>
      <SideNavigation />
      <Header />
      <Banner />
      {/* <ModalCreate /> */}
      <ModalDelete />
      <ModalSuccess />
      <StudentTable />
    </main>
  );
};

export default Home;
