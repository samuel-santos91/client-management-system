import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClientList from "./containers/ClientList/ClientList";
import NewClientWizard from "./containers/NewClientWizard/NewClientWizard";
import StepperContextProvider from "./context/StepperContextProvider";

import "./App.css";

function App() {
  return (
    <StepperContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientList />} />
          <Route path="/new-client" element={<NewClientWizard />} />
        </Routes>
      </BrowserRouter>
    </StepperContextProvider>
  );
}

export default App;
