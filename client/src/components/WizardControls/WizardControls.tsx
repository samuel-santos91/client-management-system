import React, { useContext } from "react";

import { StepperContext } from "../../context/StepperContextProvider";

import classes from "./WizardControls.module.scss";

const WizardControls: React.FC = () => {
  const context = useContext(StepperContext);
  if (!context) return null;
  const { currentStep, setCurrentStep, steps } = context;

  return (
    <div className={classes['btn-wrapper']}>
      <button
        className={classes["prev-btn"]}
        onClick={() => setCurrentStep((prev) => prev - 1)}
        disabled={currentStep === 1}
      >
        Previous
      </button>
      <button
        className={classes["next-btn"]}
        type="submit"
        disabled={currentStep === steps.length}
      >
        Next
      </button>
    </div>
  );
};

export default WizardControls;
