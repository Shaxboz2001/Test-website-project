import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import FetchData from "../../components/fetchData";
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
  // const data = useSelector((state) => state);
  // console.log(data?.results[0].category);
  const [selectCategory, setCategory] = useState();
  const [selectTestNumber, setTestNumber] = useState(10);
  const [isTestStart, setTestStart] = useState(false);
  const [testType, setTestType] = useState({});
  console.log(selectCategory);

  const { response, error,loading } = FetchData(
    {url: "api.php?amount=20"}
  );
  console.log(response);
  return (
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
    
              {response?.results.map((result, index) => (
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
              onClick={() => {
                setTestStart(true);
                console.log(selectCategory);
                setTestType(
                  response?.results.find((item) => (item.category = selectCategory))
                );
              }}
            />
            <Button
              className="btn form-control btn-primary text-white my-2"
              value="tests"
            />
          </BtnContainer>
        </CategoryBoxContainer>
  );
};

export default CategoryBox;
