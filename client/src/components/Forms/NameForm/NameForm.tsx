import React from "react";
import { useForm } from "react-hook-form";

import Input from "../../Input/Input";

interface NameFormData {
    name: string
    dateOfBirth: string
}

const NameForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<NameFormData>()

      const onSubmit = (data: NameFormData) => {
        console.log(data)
      }

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
    </form>
  );
};

export default NameForm;
