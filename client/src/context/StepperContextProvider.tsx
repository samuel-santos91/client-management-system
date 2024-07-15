import { createContext, ReactNode, useState } from "react";

export interface FormDataType {
  name: string;
  dateOfBirth: string;
  mainLanguage: string;
  secondaryLanguage: string;
  fundingSource: string;
}

interface ContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
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

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export default StepperContextProvider;
