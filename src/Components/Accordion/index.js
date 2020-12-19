import React, { useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Container } from "./styles";

const Accordion = ({ title, content, imgUrl }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion-icon");

  const contentRef = useRef(null);

  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setRotate(active === "active" ? "accordion-icon" : "accordion-icon rotate");
    console.log(active);
  }

  return (
    <Container className="accordion-section" active={active}>
      <button className={`accordion`} onClick={toggleAccordion}>
        <p className="accordion-title">{title}</p>
        <FaArrowDown
          className={`${rotate}`}
          size="2em"
          fill={active === "" ? "#fff" : "#6f6f6f"}
        />
      </button>
      <div
        className="accordion-content"
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
      >
        {imgUrl && <img src={imgUrl} alt="" />}
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Container>
  );
};

export default Accordion;
