import { createContext, ReactNode, useContext, useState } from "react";

type AlertContextData = {
  openAlert: () => void;  
  closeAlert: () => void;  
  toggleModalPassword: () => void;
  isOpen: boolean;
  isOpenModalPassword: boolean;
  password: string;
  setIsOpenModalPassword: (state: boolean) => void; 
  resetModalPassword: () => void;
  setPassword: (password: string) => void;
}

export const AlertContext = createContext({} as AlertContextData);

type AlertContextProviderProps = {
  children: ReactNode;
}

export function AlertContextProvider({ children }: AlertContextProviderProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalPassword, setIsOpenModalPassword] = useState(false);
  const [password, setPassword] = useState("");

  function openAlert() {

    setIsOpen(true);
    console.log(isOpen);
  }

  function closeAlert() {
    setIsOpen(false);
  }

  function toggleModalPassword(){
    setIsOpenModalPassword(!isOpenModalPassword);
  }

  function resetModalPassword(){
    setPassword("");
    setIsOpenModalPassword(false);
    setIsOpen(false);
  }


  return (
    <AlertContext.Provider 
      value={{
        closeAlert,
        openAlert,
        isOpen,
        password,
        setPassword,
        isOpenModalPassword,
        toggleModalPassword,
        setIsOpenModalPassword,
        resetModalPassword,
      }}>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  return useContext(AlertContext);
}