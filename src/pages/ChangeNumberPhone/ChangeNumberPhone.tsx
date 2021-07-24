import { useReducer } from 'react';

import { Container, TextField, Typography, Box } from '@material-ui/core';
import { useStyles } from "./ChangeNumberPhone.style";
import arrowRigth from "../../assets/icons/arrowRigth.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";

import "./style.scss";
import { AppBar } from '../../components/AppBar';
import { Modal } from '../../components/Modal';

export const ChangeNumberPhone: React.FC = () => {
  const style = useStyles();

  const useToggle = (initialState: boolean) =>
    useReducer((prevState: boolean) => !prevState, initialState);

  const [isShowModal, setIsShowModal] = useToggle(false);

  return (
    <Container maxWidth="xs" className={style.container}>
      <AppBar homeRoute="#"></AppBar>

      <Box className={style.info}>
        <Typography className={style.description}>Editar telefone</Typography>
        <Typography className={style.infoPhone}>Seu telefone atual é:<br />(88) 9999-8583</Typography>
      </Box>

      <Box className={style.test}>


        <TextField
          className={style.input}
          color="primary"
          placeholder="Digite apenas o número"
          label="Número de telefone"

          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          type="text"
          fullWidth
        />

        <div className="footer">
          <button
            className={"cancelButton"}
          > 
            <img src={arrowLeft} alt="Voltar" />
            Voltar
          </button>
          <button
            className={"nextButton"}
            onClick={setIsShowModal}>Próximo
            <img src={arrowRigth} alt="Próximo" />
          </button>
        </div>
        <Modal showModal={isShowModal} onHideModal={setIsShowModal} />
      </Box>

    </Container >
  );
}
