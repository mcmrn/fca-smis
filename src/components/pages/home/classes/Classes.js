import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Header from "../../../header/Header";
import SideNavigation from "../../../sidenav/SideNavigation";
import BannerCreateButton from "../../../widgets/BannerCreateButton";
import ModalCreateClass from "../../../widgets/modals/ModalCreateClass";
import ModalDeleteClass from "../../../widgets/modals/ModalDeleteClass";
import ModalEdit from "../../../widgets/modals/ModalEditClass";
import SearchBar from "../../../widgets/SearchBar";
import ClassesTable from "./ClassesTable";

const Classes = () => {
  return (
    <>
      <Header />

      <SideNavigation />
      <ClassesTable />
      {/* <ModalEditClass /> */}
      {/* <ModalCreateClass /> */}
      {/* <ModalDeleteClass /> */}
    </>
  );
};

export default Classes;
