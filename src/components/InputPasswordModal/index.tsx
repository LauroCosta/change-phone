import React from "react";
import OtpInput from "react-otp-input";
import closeIcon from "../../assets/icons/close.svg";
import confirmIcon from "../../assets/icons/confirm.svg";
import { useAlert } from "../../hooks/useAlert";
import { useMask } from "../../hooks/useMask";

import "./style.scss";

interface IModalProps {
  showModal: boolean;
}

export function Modal({ showModal }: IModalProps) {

  const {
    openAlert, 
    toggleModalPassword,    
    password,
    setPassword, 
    resetModalPassword,
    setNumberPhoneDisplay,
    phoneInput,
    setPhoneInput,
  } = useAlert();

  const handlePassword = (e: string) => {
    console.log(e);
    const regExp = /[0-9]/g;
    e = e.replace(regExp, '*');
    setPassword(e)
  }


  function confirmPassword(){

    if(password.length == 4){
      openAlert();
      // setTimeout(() => { toggleModalPassword(); }, 300);
      setNumberPhoneDisplay(phoneInput);
      setPhoneInput("");
      setPassword("");
    }
  }

  return (

    <section className={`${showModal ? 'modal-open' : 'close'} modal`}>
      <button className="modal-button" onClick={resetModalPassword}>
        <img src={closeIcon} alt="Fechar" />
        Fechar
      </button>

      <div className="content">
        <div className="infoModal">
          <h1>Digite sua senha</h1>
          <strong>Para autenticar a operação</strong>
        </div>

        <div className="inputContainer">
          <OtpInput
            className="inputs"
            numInputs={4}
            value={password}
            onChange={handlePassword}
            isInputNum

          />
        </div>
        <div className="containerConfirmButton">
          <button
            type="button"
            className="confirmButton"
            onClick={confirmPassword}
          >
            <img src={confirmIcon} alt="Confirmar" />
            Confirmar
          </button>
        </div>
      </div>
    </section>

  );
}