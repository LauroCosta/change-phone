import React from "react";
import { Container } from "@material-ui/core";
import { CancelButton } from "../../components/CancelButton";
import close from "../../assets/icons/close.svg";
import { useStyles } from "./EditAccount.style";
import confirmIcon from "../../assets/icons/confirm.svg"
import userImg from "../../assets/user.svg";
import "./style.scss";


export const EditAccount: React.FC = () => {
  const style = useStyles();

  const [name, setName] = React.useState("Pedro Victor Nascimento Oliveira"); 
  const [value, setValue] = React.useState(name);

  function handleSave(){
    setName(value);
  }

  return (
    <Container maxWidth="xs" className={style.container} >
      <header>
        <div>
          <h1>Editar Conta</h1>
          <CancelButton>
            <img src={close} alt="fechar" />
            <span>Cancelar</span>
          </CancelButton>
        </div>
      </header>

      <div className="updatePhoto">
        <div className="userPhoto">
          <img src={userImg} alt="Foto Usuário" />
        </div>

        <button>
          <span>Alterar Foto</span>
        </button>
      </div>


      <div className="inputNameAccount">
        <label>Editar apelido da conta</label>
        <input
          placeholder="Digite o apelido da conta"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>


      <footer>
        <button className="saveButton" onClick={handleSave}>
          <img src={confirmIcon} alt="Salvar" />
          <span>Salvar</span>
        </button>
      </footer>
    </Container >
  );
}

