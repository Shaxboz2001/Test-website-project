import React from "react";
import { TestContainer, TestNumberBox, TestNumberBoxContainer } from "./tests.style";



const Tests = (props) => {
  const numbersArr = [];
  for(let i=0;i < props.testNumber;i++){
    numbersArr.push(i);
  }
  return <TestContainer>
    <TestNumberBoxContainer>
      {
        numbersArr.map((number,index) => (
          <TestNumberBox key={index}>{number+1}</TestNumberBox>
        ))
      }
    </TestNumberBoxContainer>
  </TestContainer>
};

export default Tests;
