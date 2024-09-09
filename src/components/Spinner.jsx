import React from "react";
import { ClipLoader } from "react-spinners";


const Spinner = () => {
  // console.log("hii");
  return (
    <>
       <section
        style={{
          minHeight: "525px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       {/* <ClipLoader size={150} />  */}
      {/* <img src="/5.gif" alt="" /> */}
      <img src="/Full snake.gif" alt="" />

      </section>
    </>
  );
};

export default Spinner;