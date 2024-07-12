import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientList from "./ClientList/ClientList";
import NewClientWizard from "./NewClientWizard/NewClientWizard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/add-client" element={<NewClientWizard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
