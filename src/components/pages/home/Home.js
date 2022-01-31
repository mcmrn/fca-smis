import React from "react";
import Banner from "../../banner/Banner";
import Header from "../../header/Header";
import SideNavigation from "../../sidenav/SideNavigation";
import ModalCreateStudent from "../../widgets/modals/ModalCreateStudent";
import ModalDeleteStudent from "../../widgets/modals/ModalDeleteStudent";
import ModalSuccess from "../../widgets/modals/ModalSuccess";
import Spinner from "../../widgets/Spinner";
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
      <Spinner />
      <StudentTable />
    </main>
  );
};

export default Home;
