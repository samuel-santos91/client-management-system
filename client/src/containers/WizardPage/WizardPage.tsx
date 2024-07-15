import React from "react";
import { Link } from "react-router-dom"

import WizardContent from "../WizardContent/WizardContent";

const WizardPage: React.FC = () => {
  return (
    <div>
      <WizardContent/>
      <Link to='/'>Return to main page</Link>
    </div>
  );
};

export default WizardPage;
