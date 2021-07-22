import {  useReducer } from 'react';

import { Button, Container, TextField, Typography, Box} from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import { useStyles } from "./ChangeNumberPhone.style";
import { AppBar } from '../../components/AppBar';
import { Modal } from '../../components/Modal';

export const ChangeNumberPhone: React.FC = () => {
  const style = useStyles();

  const useToggle = (initialState: boolean) =>
    useReducer((prevState: boolean) => !prevState, initialState);

  const [isShowModal, setIsShowModal] = useToggle(true);

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

        <Box className={style.footer}>
          <Button
            className={style.button}
            variant="contained"
            size="large"
            color="secondary"
            fullWidth
            startIcon={<ArrowBackIosRounded style={{ color: "#5F82A6" }} />}
          >Voltar</Button>
          <Button
            className={style.button}
            color="primary"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosRounded style={{ color: "#5F82A6" }} />}
            fullWidth
            onClick={() => { setIsShowModal() }}
          >Próximo</Button>
        </Box>
        <Modal showModal={isShowModal} onHideModal={setIsShowModal} />
      </Box>

    </Container >
  );
}
