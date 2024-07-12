import React, { useContext } from "react";

import { StepperContext } from "../../context/StepperContextProvider";

const WizardControls: React.FC = () => {
  const context = useContext(StepperContext);

  if (!context) {
    return null;
  }

  const { currentStep, setCurrentStep, steps } = context;

  const controlHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const action = e.currentTarget.textContent;

    if (action === "Previous") {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <button onClick={controlHandler} disabled={currentStep === 1}>
        Previous
      </button>
      <button onClick={controlHandler} disabled={currentStep === steps.length}>
        Next
      </button>
    </div>
  );
};

export default WizardControls;
