import React, { createContext, ReactNode, useContext, useState } from "react";
import { maskPhone } from "../utils/mask/maskPhone";
import { useMask } from "./useMask";

type AlertContextData = {
  openAlert: () => void;  
  closeAlert: () => void;  
  toggleModalPassword: () => void;
  isOpen: boolean;
  isOpenModalPassword: boolean;
  password: string;
  phoneInput: string;
  numberPhoneDisplay: string;
  setIsOpenModalPassword: (state: boolean) => void; 
  resetModalPassword: () => void;
  setPassword: (password: string) => void;
  setPhoneInput: (phoneInput: string) => void;
  setNumberPhoneDisplay: (numberPhoneDisplay: string) => void;
}

export const AlertContext = createContext({} as AlertContextData);

type AlertContextProviderProps = {
  children: ReactNode;
}

export function AlertContextProvider({ children }: AlertContextProviderProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalPassword, setIsOpenModalPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneInput, setPhoneInput ] = useMask(maskPhone);
  const [numberPhoneDisplay, setNumberPhoneDisplay] = React.useState('(85) 00000.0000');

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
    setPhoneInput("");
    closeAlert();
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
        phoneInput,
        setPhoneInput,
        numberPhoneDisplay,
        setNumberPhoneDisplay
      }}>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  return useContext(AlertContext);
}