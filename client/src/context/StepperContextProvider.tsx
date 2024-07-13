import { createContext, ReactNode, useState } from "react";

interface FormDataType {
  name: string;
  dateOfBirth: string;
  mainLanguage: string;
  secondaryLanguage: string;
  fundingSource: string;
}

interface ContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  steps: string[];
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

interface StepperProviderProps {
  children: ReactNode;
}

export const StepperContext = createContext<ContextType | null>(null);

const StepperContextProvider: React.FC<StepperProviderProps> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    dateOfBirth: "",
    mainLanguage: "",
    secondaryLanguage: "",
    fundingSource: "",
  });

  const steps = ["Step 1", "Step 2", "Step 3"];

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        steps,
        formData,
        setFormData,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export default StepperContextProvider;
