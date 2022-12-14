import React,{useEffect, useState} from 'react'
import axios from 'axios'

axios.defaults.baseURL = "https://opentdb.com/";

const FetchData = ({url}) => {
  const [response,setResponse] = useState(null);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(true);
     useEffect(() => {
      const getData = () => {
               axios
         .get(url)
         .then((res) => setResponse(res.data))
         .catch((err) => setError(err))
         .finally(() => setLoading(false))
      }
      getData();
     }, [url]);
  return {response,error,loading}
}

export default FetchData;