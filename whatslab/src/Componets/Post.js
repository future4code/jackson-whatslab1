import React from "react";
import styled from "styled-components";


// const container = styled.div`
//   background-color: ${(props) => props.corDeFundo};
//   color: ${(props) => props.corDoTexto};
//   width: ${(props) => props.largura};
//   height: ${(props) => props.altura};
//     if (props.tamanho === "grande") {
//       return "70px";
//     } else if (props.tamanho === "pequeno") {
//       return "30px";
//     }
//   }};
// `;

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
  // está mapeado o array, precisamos deste código?
   const mensagemEnviada = this.state.arrayComentario.map((bananinha) => {
      return (
        <p>
          {bananinha.Nome}  {bananinha.Mensagem}
        </p>
      );
    });

    return (
      <div>
        <div id="container-principal">
        <div>{mensagemEnviada}</div>
        <div id="container-">
          <input
           
            value={this.state.valorInputUsuario}
            
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />
          <input
           
            value={this.state.valorInputMensagem}
            
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionaMensagem}>Adicionar</button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default PostWhats;