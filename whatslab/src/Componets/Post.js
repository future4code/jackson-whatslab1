import React from "react";

class PostWhats extends React.Component {
  state = {

    arrayComentario: [
      {
        nome: "",
        Mensagem: ""
      }],
    
    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  adicionaMensagem = () => {
   // Colocamos em uma variavel o objeto que representa uma nova mensagem
    const novaMensagem = {
      
      Usuario: this.state.valorInputUsuario,
      
      Mensagem: this.state.valorInputMensagem
      
    };

  // Copia array de comentarios e adiciona um nova mensagem no final
    const novasMensagems = [...this.state.arrayComentario, novaMensagem];

    // Define o estado "arrayComentario" como a variavel "novasMensagems"
    this.setState({ arrayComentario: novasMensagems });
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
          {bananinha.nome} - {bananinha.Mensagem}
        </p>
      );
    });

    return (
      <div>
        <div>{mensagemEnviada}</div>
        <div>
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
          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </div>
        
      </div>
    );
  }
}

export default PostWhats;