import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ColorContainer from "./ColorContainer";
import ParametersContainer from "./ParametersContainer";
import { FaChevronDown } from "react-icons/fa";
const SingleFilterItem = ({ details, allFilterParameters }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const refContainer = useRef(null);
  const refContainerItem = useRef(null);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  useEffect(() => {
    const refContainerItemHeight = refContainerItem.current.getBoundingClientRect().height;
    // console.log(refC);
    if (isAccordionOpen) {
        refContainer.current.style.height = `${refContainerItemHeight}px`;
    }else{
        refContainer.current.style.height = 0
    }
  }, [isAccordionOpen]);
  return (
    <FilterItem className="border-1 border-bottom border-black mb-2"  >
      <header
        className="px-4 py-2 text-uppercase d-flex justify-content-between align-items-center"
        onClick={toggleAccordion}
      >
        <h5>{details}</h5>
        <i>{<FaChevronDown />}</i>
      </header>
      <section className={`items-container`}  ref={refContainer}>
        {details == "colors" ? (
          <ColorContainer
            params={allFilterParameters[details]}
            itemRef={refContainerItem}
            category={details}
          />
        ) : (
          <ParametersContainer
            params={allFilterParameters[details]}
            itemRef={refContainerItem}
            category={details}
          />
        )}
      </section>
    </FilterItem>
  );
};

const FilterItem = styled.section`
  .items-container{
    height: 0;
    overflow: hidden;
    transition: .3s;
  }
  h5{
    cursor: pointer;
  }
`;

export default SingleFilterItem;
