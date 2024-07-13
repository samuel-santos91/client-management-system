import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Input/Input";
import WizardControls from "../../WizardControls/WizardControls";

export interface LanguageFormData {
  mainLanguage: string;
  secondaryLanguage: string;
}

interface FormProps {
  onSubmit: (data: LanguageFormData) => void;
}

const LanguageForm: React.FC<FormProps> = ({ onSubmit }) => {
  const storedFormData = JSON.parse(
    localStorage.getItem("LanguageFormData") || "{}"
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LanguageFormData>({
    defaultValues: {
      mainLanguage: storedFormData.mainLanguage,
      secondaryLanguage: storedFormData.secondaryLanguage,
    },
  });

  const watchAll = watch();

  useEffect(() => {
    localStorage.setItem(
      "LanguageFormData",
      JSON.stringify({
        mainLanguage: watchAll.mainLanguage,
        secondaryLanguage: watchAll.secondaryLanguage,
      })
    );
  }, [watchAll]);

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
