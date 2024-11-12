import React from "react";
import TextForm from "../TextForm";
import "../../App.css";

function Home(props) {
  return (
    <div>
      <div
        className="container my-3 border border-success p-3"
        style={{
          backgroundColor: props.mode === "light" ? "#f8f9f9" : "black",
        }}
      >
        <TextForm heading="Word Analyser" mode={props.mode} />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
