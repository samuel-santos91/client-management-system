import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Input/Input";
import WizardControls from "../../WizardControls/WizardControls";

export interface NameFormData {
  name: string;
  dateOfBirth: string;
}

interface FormProps {
  onSubmit: (data: NameFormData) => void;
}

const NameForm: React.FC<FormProps> = ({ onSubmit }) => {
  const storedFormData = JSON.parse(
    localStorage.getItem("NameFormData") || "{}"
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NameFormData>({
    defaultValues: {
      name: storedFormData.name,
      dateOfBirth: storedFormData.dateOfBirth,
    },
  });

  const watchAll = watch();

  useEffect(() => {
    localStorage.setItem(
      "NameFormData",
      JSON.stringify({
        name: watchAll.name,
        dateOfBirth: watchAll.dateOfBirth,
      })
    );
  }, [watchAll]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        label="Name"
        required={true}
        register={register}
        error={errors.name}
        placeHolder="Enter full name"
      />
      <Input
        name="dateOfBirth"
        label="Date of birth"
        type="date"
        required={true}
        register={register}
        error={errors.dateOfBirth}
      />
      <WizardControls />
    </form>
  );
};

export default NameForm;
