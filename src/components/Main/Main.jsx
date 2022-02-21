import React from "react";
import "../Main/main.scss";
import Sidebar from "../Sidebar/Sidebar";
import Rightbar from "../Rightbar/Rightbar";



function Main() {
  return (
    <div className="container1">
      <div className="container_main">

        <div className="flex">
          <Sidebar />

          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Main;
