import React from "react";
import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Calendar />
      </div>
    </div>
  );
}

export default App;

