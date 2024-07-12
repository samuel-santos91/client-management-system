import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientList from "./containers/ClientList/ClientList";
import NewClientWizard from "./containers/NewClientWizard/NewClientWizard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/new-client" element={<NewClientWizard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
