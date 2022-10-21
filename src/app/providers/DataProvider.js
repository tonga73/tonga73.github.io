import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      "data.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        console.log(response);

        return response.json();
      })

      .then(function (myJson) {
        console.log(myJson);

        setData(myJson);
      });
  };

  const value = useMemo(
    () => ({
      data,
    }),
    [data]
  );

  useEffect(() => {
    getData();
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export const useData = () => {
  return useContext(DataContext);
};
