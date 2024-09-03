import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState();

  const dataFetching = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dataFetching();
  }, []);

  return [data];
};

export default UseFetch;
