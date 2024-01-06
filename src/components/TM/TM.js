import React, { useRef, useEffect } from "react";
import logo from "../../logo.svg";
import { TweenMax, Power3 } from "gsap";

const TM = () => {
  let logoItem = useRef(null);
  let paraItem = useRef(null);

  useEffect(() => {
    TweenMax.to(logoItem, 1, {
      opacity: 1,
      y: -50,
      ease: Power3.ease,
    });
    TweenMax.to(paraItem, 1, {
      opacity: 1,
      y: -50,
      ease: Power3.ease,
      delay: 0.5,
    });
  }, []);
  return (
    <div className="container">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        ref={(el) => (logoItem = el)}
      />
      <p className="text" ref={(el) => (paraItem = el)}>
        This is a paragraph
      </p>
    </div>
  );
};

export default TM;
