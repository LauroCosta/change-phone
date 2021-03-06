import { Container, Typography, Box } from '@material-ui/core';
import { useStyles } from "./ChangeNumberPhone.style";
import React from 'react';
import arrowRigth from "../../assets/icons/arrowRigth.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import { AppBar } from '../../components/AppBar';
import { Modal } from '../../components/InputPasswordModal';
import { ConfirmPasswordModal } from '../../components/ConfirmPasswordModal';
import "./style.scss";
import { useAlert } from '../../hooks/useAlert';

export const ChangeNumberPhone: React.FC = () => {
  const style = useStyles();

  const {
    isOpen,
    isOpenModalPassword,
    toggleModalPassword,
    resetModalPassword,
    phoneInput,
    setPhoneInput,
    numberPhoneDisplay,
  } = useAlert();


  function handleNextButton() {

    if(phoneInput.length == 15) {
      toggleModalPassword(); 
    }
  }

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneInput(event.target.value);

  return (
    <Container maxWidth="xs" className={style.container}>

      <ConfirmPasswordModal showModal={isOpen} />
      <AppBar />

      <Box className={style.info}>
        <Typography className={style.description}>Editar telefone</Typography>
        <Typography className={style.infoPhone}>Seu telefone atual é:<br />{numberPhoneDisplay}</Typography>
      </Box>

      <div className="inputNumberPhone">
        <label>Número de telefone</label>
        <input
          placeholder="Digite apenas números"
          value={phoneInput}
          onChange={onPhoneChange}
          disabled={isOpenModalPassword}

        />
      </div>


      <div className="footer">
        <button
          type="button"
          className={"cancelButton"}
          onClick={resetModalPassword}
        >
          <img src={arrowLeft} alt="Voltar" />
          <span>Voltar</span>
        </button>
        <button
          type="button"
          className={"nextButton"}
          onClick={handleNextButton}>
          <span>Próximo</span> 
          <img src={arrowRigth} alt="Próximo" />
        </button>
      </div>
      <Modal showModal={isOpenModalPassword} />

    </Container >
  );
}

