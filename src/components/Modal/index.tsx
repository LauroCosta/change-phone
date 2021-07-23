import React from "react";
import OtpInput from "react-otp-input";
import closeIcon from "../../assets/icons/close.svg";
import confirmIcon from "../../assets/icons/confirm.svg";
import "./style.scss";

interface IModalProps {
  showModal: boolean;
  onHideModal: () => void;
}

export function Modal({ onHideModal, showModal }: IModalProps) {

  const [inputValue, setInputValue] = React.useState("")
  console.log(`showModal`, showModal);
  return (
    <section className={`${showModal ? 'modal-open' : 'modal-close'} modal`}>
      <button className="modal-button" onClick={onHideModal}>
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
            value={inputValue}
            onChange={setInputValue}
            isInputSecure
            isInputNum
            
          />
        </div>
        <div className="containerConfirmButton">
          <button className="confirmButton">
            <img src={confirmIcon} alt="Confirmar" />
            Confirmar
          </button>
        </div>
      </div>
    </section>
  );
}