import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./containers/Main/Main";
import WizardPage from "./containers/WizardPage/WizardPage";
import UserAdded from "./components/UserAdded/UserAdded";
import StepperContextProvider from "./context/StepperContextProvider";

import "./App.css";

function App() {
  return (
    <StepperContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new-client" element={<WizardPage />} />
          <Route path="/added" element={<UserAdded/>}/>
        </Routes>
      </BrowserRouter>
    </StepperContextProvider>
  );
}

export default App;
