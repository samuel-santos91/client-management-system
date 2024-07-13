import React, { useContext } from "react";

import NameForm from "../../components/Forms/NameForm/NameForm";
import LanguageForm from "../../components/Forms/LanguageForm/LanguageForm";
import FundingSourceForm from "../../components/Forms/FundingSourceForm/FundingSourceForm";
import { StepperContext } from "../../context/StepperContextProvider";
import { NameFormData } from "../../components/Forms/NameForm/NameForm";
import { LanguageFormData } from "../../components/Forms/LanguageForm/LanguageForm";
import { FundingSourceFormData } from "../../components/Forms/FundingSourceForm/FundingSourceForm";

type FormData = NameFormData & LanguageFormData & FundingSourceFormData

const WizardContent: React.FC = () => {
  const context = useContext(StepperContext);
  if (!context) return null;
  const { currentStep, setCurrentStep, setFormData } = context;

  const submitHandler = (data: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div>
      {currentStep === 1 && <NameForm onSubmit={submitHandler} />}
      {currentStep === 2 && <LanguageForm onSubmit={submitHandler}/>}
      {currentStep === 3 && <FundingSourceForm onSubmit={submitHandler}/>}
    </div>
  );
};

export default WizardContent;
