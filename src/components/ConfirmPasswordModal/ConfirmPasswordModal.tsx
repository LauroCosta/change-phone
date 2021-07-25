import "./style.scss";
import confirmPassword from "../../assets/icons/confirmPassword.svg";
import { useAlert } from "../../hooks/useAlert";

interface IConfirmPasswordModalProps {
  showModal: boolean;
}

export const ConfirmPasswordModal: React.FC<IConfirmPasswordModalProps> 
= ({ showModal }) => {

  return (
    // <section onClick={closeAlert} className={`${showModal ? 'modal-open' : 'modal-close'} alert`}>
    <section className={`${showModal ? 'modal-open' : 'modal-close'} alert`}>
      <div className="content">
        <img src={confirmPassword} alt="Confirmação" />
        <h1>Concluído</h1>
      </div>

    </section>);
}