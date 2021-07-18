import { Button, Container, TextField, Typography, Box } from '@material-ui/core';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import { useStyles } from "./app";
import { AppBar } from './components/AppBar';

function App() {
  const style = useStyles();

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
            variant="contained"
            size="large"
            color="secondary"
            fullWidth
            startIcon={<ArrowBackIosRounded />}
          >Voltar</Button>
          <Button
            color="primary"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosRounded color='secondary' />}
            fullWidth
          >Próximo</Button>
        </Box>
      </Box>
    </Container >

  );
}

export default App;
