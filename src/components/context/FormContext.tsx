import type { FormContextType } from "@/types/types";
import { createContext, useContext, useState } from "react";

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEditing, setIsEditing] = useState<string | undefined>("");
  return (
    <FormContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
