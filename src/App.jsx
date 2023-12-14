import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import SearchBox from "./components/SearchBox";
import FoodInfo from "./components/FoodInfo"

const App = () => {
  const [srch, setSrch] = useState("");
  const sea = (e) => {
    setSrch(e.target.value);
  };
  return (
    <>
      <searchBox sea={sea} />
        {FoodInfo.filter((val) =>
        srch === "" ? true : val.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((foodItem) => (
          <div key={foodItem.id} style={{ marginBottom: '25px', marginLeft: '100px' }}>
          <FoodBox food={foodItem} />
        </div>
      ))}
    </>
  );
};

export default App;