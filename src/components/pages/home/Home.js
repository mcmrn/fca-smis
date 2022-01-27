import React from "react";
import Banner from "../../banner/Banner";
import Header from "../../header/Header";
import SideNavigation from "../../sidenav/SideNavigation";
import ModalCreate from "../../widgets/modals/ModalCreateStudent";
import ModalDelete from "../../widgets/modals/ModalDeleteStudent";
import ModalSuccess from "../../widgets/modals/ModalSuccess";
import ClassesTable from "./classes/ClassesTable";
import StudentTable from "./students/StudentsTable";

const Home = () => {
  // const [isShow, setIsShow] = React.useState(false);
  // console.log(isShow);
  return (
    <main>
      <SideNavigation />
      <Header />
      {/* <ModalCreateStudent /> */}
      {/* <ModalDeleteStudent /> */}
      {/* <ModalSuccess /> */}
      <StudentTable />
    </main>
  );
};

export default Home;
