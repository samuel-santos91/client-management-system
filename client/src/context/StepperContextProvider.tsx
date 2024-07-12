import { createContext, ReactNode, useState } from 'react'

interface ContextType {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  steps: string[]
}

interface StepperProviderProps {
  children: ReactNode
}

export const StepperContext = createContext<ContextType | null>(null)

const StepperContextProvider: React.FC<StepperProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    'Step 1',
    'Step 2',
    'Step 3',
  ]

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        steps,
      }}
    >
      {children}
    </StepperContext.Provider>
  )
}

export default StepperContextProvider