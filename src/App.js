import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import TestContainer from "./section/container/container.component";
import TestQuestion from "./section/TestQuestion/testQuestion.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((res) => {
        dispatch({
          type: "change_data",
          payload: res.data,
        });
      })
      .catch((err) => err);
  }, []);
  // const data = useSelector(state => state);
  // console.log(data);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TestContainer />} />
          <Route path="/start"  element={<TestQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
