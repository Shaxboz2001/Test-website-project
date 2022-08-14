import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import Tests from "../Tests/tests.component";
import {
  BtnContainer,
  Button,
  CategoryBoxContainer,
  SelectBox,
  SelectBoxContainer,
  SelectBoxText,
} from "./category.style";

const CategoryBox = (props) => {
  const data = useSelector((state) => state);
  console.log(data?.results);
  const [selectCategory, setCategory] = useState("");
  const [selectTestNumber, setTestNumber] = useState(10);
  const [isTestStart, setTestStart] = useState(false);
  return (
    <>
      { isTestStart  ? (
        <Tests testNumber = {selectTestNumber} testCategory = {selectCategory} />
      ) : (
        <CategoryBoxContainer className="col-8">
          <SelectBoxContainer className="my-5">
            <SelectBoxText>Number of Questions</SelectBoxText>
            <SelectBox
              className="form-select"
              value={selectTestNumber}
              onChange={(e) => setTestNumber(e.target.value)}
            >
              {props.questionNumber.map((question, index) => (
                <option value={question} key={index}>
                  {question}
                </option>
              ))}
            </SelectBox>
          </SelectBoxContainer>
          <SelectBoxContainer className="my-5">
            <SelectBoxText>Category of Question</SelectBoxText>
            <SelectBox
              className="form-select"
              value={selectCategory}
              onChange={(e) => setCategory(e.target.value)}
            >
              {console.log(selectCategory)}
              {data?.results.map((result, index) => (
                <option value={result.category} key={index}>
                  {result.category}
                </option>
              ))}
            </SelectBox>
          </SelectBoxContainer>
          <BtnContainer>
            <Button
              className="btn form-control btn-success text-white my-2"
              value="Start"
              onClick={() => setTestStart(true)}
            />
            <Button
              className="btn form-control btn-primary text-white my-2"
              value="tests"
            />
          </BtnContainer>
        </CategoryBoxContainer>
      )}
    </>
  );
};

export default CategoryBox;

