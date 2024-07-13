import React from "react";
import { useForm } from "react-hook-form";

import Input from "../../Input/Input";
import WizardControls from "../../WizardControls/WizardControls";
import { fundingSources } from "../../../constants/fundingSources";

export interface FundingSourceFormData {
  fundingSource: string;
}

interface FormProps {
  onSubmit: (data: FundingSourceFormData)=> void
}

const FundingSourceForm: React.FC<FormProps> = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FundingSourceFormData>();

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
      <WizardControls/>
    </form>
  );
};

export default FundingSourceForm;
