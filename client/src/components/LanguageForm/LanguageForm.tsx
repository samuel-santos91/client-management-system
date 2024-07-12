import React from "react";
import { useForm } from "react-hook-form";

import Input from "../Input/Input";

interface LanguageFormData {
    mainLanguage: string
    secondaryLanguage: string
}

const LanguageForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LanguageFormData>()

      const onSubmit = (data: LanguageFormData) => {
        console.log(data)
      }

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
    </form>
  );
};

export default LanguageForm;
