import React from "react";

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
   const mensagemEnviada = this.state.pessoas.map((pessoa) => {
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