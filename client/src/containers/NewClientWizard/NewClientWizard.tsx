import React from "react";

import WizardContent from "../WizardContent/WizardContent";
import WizardControls from "../../components/WizardControls/WizardControls";

const NewClientWizard: React.FC = () => {
  return (
    <div>
      <WizardContent/>
      <WizardControls/>
    </div>
  );
};

export default NewClientWizard;
