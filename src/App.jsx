import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <h1>CRUD APPLICATION</h1>
       <Routes>
        <Route exact path="/" element= {<Read/>}/>
        <Route exact path="/create" element= {<Create/>}/>
        <Route exact path="/edit" element= {<Edit/>}/>
       </Routes>
    </>
  );
}

export default App;
