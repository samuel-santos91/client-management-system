import React from "react";
import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import { fundingSources } from "../../constants/fundingSources";

interface FundingSourceFormData {
  fundingSource: string;
}

const FundingSourceForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FundingSourceFormData>();

  const onSubmit = (data: FundingSourceFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="fundingSource"
        label="Funding source"
        required={true}
        register={register}
        error={errors.fundingSource}
        placeHolder="Enter source"
        isDropdown={true}
        dropdownOptions={fundingSources}
      />
    </form>
  );
};

export default FundingSourceForm;
