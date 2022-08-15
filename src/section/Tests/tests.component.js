import React from "react";
import  TestQuestion  from "../TestQuestion/testQuestion.component";
import { TestContainer, TestNumberBox, TestNumberBoxContainer } from "./tests.style";



const Tests = (props) => {
  const numbersArr = [];
  for(let i=0;i < props.testNumber;i++){
    numbersArr.push(i);
  }
  console.log(props.testType);
  return <TestContainer>
    <TestNumberBoxContainer>
      {
        numbersArr.map((number,index) => (
          <TestNumberBox key={index}>{number+1}</TestNumberBox>
        ))
      }
    </TestNumberBoxContainer>
    <TestQuestion />
  </TestContainer>
};

export default Tests;
