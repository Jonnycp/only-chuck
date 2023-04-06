import React, {useState} from "react";
import Theme from "./style/Theme";

import Header from "./components/Header";

const App = () => {
  const [category, setCategory] = useState("random");

  return (
    <Theme>
        <Header category={category} setCategory={setCategory}/>
    </Theme>
  );
};

export default App;
