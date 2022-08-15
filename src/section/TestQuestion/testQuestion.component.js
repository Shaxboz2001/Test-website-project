import React from "react";
import { TestQuestionBox, TestQuestionContainer, TestQuestionText, TestVariant, TestVariantsBox } from "./testQuestion.style";

const TestQuestion = (props) => {
  return (
    <TestQuestionContainer>
      <TestQuestionBox>
        <TestQuestionText>{props.question}</TestQuestionText>
      </TestQuestionBox>
      <TestVariantsBox>
        {
            // props.variants.map((variant) => (
            //     <TestVariant>{variant}</TestVariant>
            // ))
        }
        Salom
      </TestVariantsBox>
    </TestQuestionContainer>
  );
};

export default TestQuestion;
