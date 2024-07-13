import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Input/Input";
import WizardControls from "../../WizardControls/WizardControls";
import { StepperContext } from "../../../context/StepperContextProvider";

export interface LanguageFormData {
  mainLanguage: string;
  secondaryLanguage: string;
}

interface FormProps {
  onSubmit: (data: LanguageFormData) => void;
}

const LanguageForm: React.FC<FormProps> = ({ onSubmit }) => {
  const context = useContext(StepperContext);
  if (!context) return null;
  const { formData } = context;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LanguageFormData>({
    defaultValues: {
      mainLanguage: formData.mainLanguage,
      secondaryLanguage: formData.secondaryLanguage,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="mainLanguage"
        label="Main language"
        required={true}
        register={register}
        error={errors.mainLanguage}
        placeHolder="Enter language"
      />
      <Input
        name="secondaryLanguage"
        label="Secondary language"
        required={true}
        register={register}
        error={errors.secondaryLanguage}
        placeHolder="Enter language"
      />
      <WizardControls />
    </form>
  );
};

export default LanguageForm;
