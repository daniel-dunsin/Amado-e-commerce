import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
const ColorContainer = ({ params, itemRef, category }) => {
  const { editFilterParameters} = useGlobalContext();
  return (
    <ItemsContainer className="p-2 px-4" ref={itemRef}>
      {params.map((color) => {
        return (
          <>
            <input type="checkbox" id={color} onChange={(e) => { editFilterParameters(e, category, color) }} />
            <label htmlFor={color}>
              <ColorsCircle
                key={color}
                bg={color}
                className="d-inline-block mx-1"
              />
            </label>
          </>
        );
      })}
    </ItemsContainer>
  );
};

const ItemsContainer = styled.article`
  overflow: hidden;
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label > div {
    border: 3px solid rgba(0, 0, 0, 0.8);
  }
`;

const ColorsCircle = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${({ bg }) => bg};
  border-radius: 50%;
  /* box-shadow: 1px 2px 5px rgba(0,0,0,.5); */
`;
export default ColorContainer;
