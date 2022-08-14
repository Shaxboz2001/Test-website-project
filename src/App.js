import {  useSelector,useDispatch } from "react-redux";
import axios from "axios";
import {useEffect} from 'react'
import Navbar from "./components/Navbar/navbar.component";
import './main.css'
import TestContainer from "./section/container/container.component";

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
      <Navbar />
      <TestContainer />
    </div>
  );
}

export default App;
