import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import Input from "../../Input/Input";
import WizardControls from "../../WizardControls/WizardControls";
import { StepperContext } from "../../../context/StepperContextProvider";

export interface NameFormData {
  name: string;
  dateOfBirth: string;
}

interface FormProps {
  onSubmit: (data: NameFormData) => void;
}

const NameForm: React.FC<FormProps> = ({ onSubmit }) => {
  const context = useContext(StepperContext);
  if (!context) return null;
  const { formData } = context;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameFormData>({
    defaultValues: {
      name: formData.name,
      dateOfBirth: formData.dateOfBirth,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        label="Name"
        required={true}
        register={register}
        error={errors.name}
        placeHolder="Enter name"
      />
      <Input
        name="dateOfBirth"
        label="Date of birth"
        type="date"
        required={true}
        register={register}
        error={errors.dateOfBirth}
        placeHolder="Enter name"
      />
      <WizardControls />
    </form>
  );
};

export default NameForm;
