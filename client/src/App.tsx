import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./containers/Main/Main";
import NewClientWizard from "./containers/NewClientWizard/NewClientWizard";
import StepperContextProvider from "./context/StepperContextProvider";

import "./App.css";

function App() {
  return (
    <StepperContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new-client" element={<NewClientWizard />} />
        </Routes>
      </BrowserRouter>
    </StepperContextProvider>
  );
}

export default App;
