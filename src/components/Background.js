import React from "react";
import Xmas from "../images/neonxmasTrim.mp4";

export default function Background() {
  return (
    <section className="Wrap">
      {" "}
      <video className="vidBack" autoPlay muted loop>
        <source src={Xmas} type="video/mp4"></source>
      </video>
    </section>
  );
}
