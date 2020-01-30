import React, { useState } from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form.js";
import Team from "./components/FormContainer.js";

function App() {
  const [team, setTeam] = useState([
    {
      name: ""
    }
  ]);

  const addNewTeam = param => {
    const newTeam = {
      id: Date.now(),
      name: param.name
    };
    setTeam([...team, newTeam]);
  };

  return (
    <div>
      <h1>My Notes</h1>
      {/* we are going to pass a function down as a prop */}
      <Form addNewTeam={addNewTeam} />
      <Team team={team} />
    </div>
  );
}
export default App;