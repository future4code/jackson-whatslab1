import React from "react";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.largura};
  height: ${props => props.altura};
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin: 0 auto;
`

const ContainerInputs = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 50%;
`

const InputNome = styled.input`
  width: 15%;
`

const InputMensagem = styled.input`
  width: 70%;
`

const BotaoEnviar = styled.button`
  width: 15%;
`

class PostWhats extends React.Component {
  state = {

    arrayComentario: [
      {
        Nome: "",
        Mensagem: ""
      }],
    
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  adicionaMensagem = () => { 
   // Colocamos em uma variavel o objeto que representa uma nova mensagem
    const novaMensagem = {
      
      Nome: this.state.valorInputUsuario,
      
      Mensagem: this.state.valorInputMensagem
      
    };
    

  // Copia array de comentarios e adiciona um nova mensagem no final
    const novasMensagems = [...this.state.arrayComentario, novaMensagem];

    // Define o estado "arrayComentario" como a variavel "novasMensagems"
    this.setState({ arrayComentario: novasMensagems });

    this.setState({ valorInputMensagem: "" })
  };

  onChangeInputUsuario = (event) => {

    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {

    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
   const mensagemEnviada = this.state.arrayComentario.map((bananinha) => {
      return (
        <p key={bananinha}>
          {bananinha.Nome}  {bananinha.Mensagem}
        </p>
      );
    });

    return (
      <div>
        <ContainerPrincipal largura={"50vw"} altura={"100vh"}>
          <div>{mensagemEnviada}</div>
          <ContainerInputs>
            <InputNome
            
              value={this.state.valorInputUsuario}
              
              onChange={this.onChangeInputUsuario}
              placeholder={"Nome"}
            />
            <InputMensagem
            
              value={this.state.valorInputMensagem}
              
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <BotaoEnviar onClick={this.adicionaMensagem}>Enviar</BotaoEnviar>
          </ContainerInputs>
        </ContainerPrincipal>  
      </div>
    );
  }
}

export default PostWhats;