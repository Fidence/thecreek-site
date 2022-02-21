import React from "react";
import ConnectCard from "../Learncard/ConnectCard";
import students from "../Learncard/Card";
import "../styles/pages.scss"
const Connect = () => {
  return (
    <div>
      <div className="products__container">
        {students.map((student, index) => {
          return <ConnectCard student={student} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Connect;
