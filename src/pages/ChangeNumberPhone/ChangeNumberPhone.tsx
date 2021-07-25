import { Container, TextField, Typography, Box } from '@material-ui/core';
import { useStyles } from "./ChangeNumberPhone.style";
import arrowRigth from "../../assets/icons/arrowRigth.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import { AppBar } from '../../components/AppBar';
import { Modal } from '../../components/InputPasswordModal';
import { ConfirmPasswordModal } from '../../components/ConfirmPasswordModal';
import "./style.scss";
import { useAlert } from '../../context/AlertContextProvider';

export const ChangeNumberPhone: React.FC = () => {
  const style = useStyles();



  const {
    isOpen,

    isOpenModalPassword,
    toggleModalPassword,
    resetModalPassword,

  } = useAlert();


  return (
    <Container maxWidth="xs" className={style.container}>

      <ConfirmPasswordModal showModal={isOpen} />
      <AppBar />

      <Box className={style.info}>
        <Typography className={style.description}>Editar telefone</Typography>
        <Typography className={style.infoPhone}>Seu telefone atual é:<br />(88) 9999-8583</Typography>
      </Box>

      <div className="inputNumberPhone">
        <label>Número de telefone</label>
        <input
          className="inputPhone"
          placeholder="Digite apenas o número"
        />
      </div>


      <div className="footer">
        <button
          type="button"
          className={"cancelButton"}
          onClick={resetModalPassword}
        >
          <img src={arrowLeft} alt="Voltar" />
          Voltar
        </button>
        <button
          type="button"
          className={"nextButton"}
          onClick={toggleModalPassword}>Próximo
          <img src={arrowRigth} alt="Próximo" />
        </button>
      </div>
      <Modal showModal={isOpenModalPassword} />


    </Container >
  );
}
