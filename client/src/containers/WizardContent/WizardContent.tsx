import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import NameForm from "../../components/Forms/NameForm/NameForm";
import LanguageForm from "../../components/Forms/LanguageForm/LanguageForm";
import FundingSourceForm from "../../components/Forms/FundingSourceForm/FundingSourceForm";

import { StepperContext } from "../../context/StepperContextProvider";
import { NameFormData } from "../../components/Forms/NameForm/NameForm";
import { LanguageFormData } from "../../components/Forms/LanguageForm/LanguageForm";
import { FundingSourceFormData } from "../../components/Forms/FundingSourceForm/FundingSourceForm";
import { FormDataType } from "../../context/StepperContextProvider";
import { addUser } from "../../services/api";

import classes from './WizardContent.module.scss';

type FormData = NameFormData & LanguageFormData & FundingSourceFormData;

const WizardContent: React.FC = () => {
  const context = useContext(StepperContext);
  if (!context) return null;
  const { currentStep, setCurrentStep, formData, setFormData } = context;

  const navigate = useNavigate();

  const addData = async (data: FormDataType) => {
    try {
      await addUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (data: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));

    setCurrentStep((prev) => prev + 1);

    if (currentStep === 3) {
      const currentData = {
        name: formData.name || "",
        dateOfBirth: formData.dateOfBirth || "",
        mainLanguage: formData.mainLanguage || "",
        secondaryLanguage: formData.secondaryLanguage || "",
        fundingSource: data.fundingSource || "",
      };

      addData(currentData);
      setCurrentStep(1);
      setFormData({
        name: "",
        dateOfBirth: "",
        mainLanguage: "",
        secondaryLanguage: "",
        fundingSource: "",
      });

      localStorage.removeItem("NameFormData");
      localStorage.removeItem("LanguageFormData");
      localStorage.removeItem("FundingSourceFormData");

      navigate("/added");
    }
  };

  return (
    <div className={classes['content-wrapper']}>
      {currentStep === 1 && <NameForm onSubmit={submitHandler} />}
      {currentStep === 2 && <LanguageForm onSubmit={submitHandler} />}
      {currentStep === 3 && <FundingSourceForm onSubmit={submitHandler} />}
    </div>
  );
};

export default WizardContent;
